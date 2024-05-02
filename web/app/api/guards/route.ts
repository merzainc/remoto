import { db } from '@/lib/db';
import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';
import z from 'zod';
import { doc, GeoPoint, setDoc, Timestamp } from 'firebase/firestore';
import dbFire from '@/config/firebase';

const GuardSchema = z.object({
  name: z
    .string({ required_error: `Name field is required` })
    .min(3, { message: 'Name should be at least 3 characters' })
    .max(50),
  force: z.string().min(6, { message: 'Invalid Guard ID' }),
  device_id: z
    .string({ required_error: 'Device ID was not provided' })
    .optional()
    .or(z.literal('')),
  password: z.string({ required_error: 'Password field is required' }),
  phone: z
    .string({ required_error: `Guard's phone number was not provided` })
    .optional()
    .or(z.literal('')),
});

export async function GET(req: NextRequest) {
  const guards = await db.guard.findMany();
  return NextResponse.json(guards);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log(body);
    const result = GuardSchema.safeParse(body);
    //@ts-ignore
    if (result.error) {
      //@ts-ignore
      return NextResponse.json({ message: result.error.issues[0].message });
    }
    const salt = await bcrypt.genSalt();
    const hashed_password = await bcrypt.hash(body.password, salt);
    let guard = await db.guard.findFirst({
      where: {
        force: body.force,
      },
    });
    if (guard) {
      return NextResponse.json({ message: 'Guard is already registered' }, { status: 400 });
    }
    guard = await db.guard.create({
      data: {
        name: body.name,
        force: body.force,
        password: hashed_password,
        phone: body.phone,
      },
    });

    await setDoc(doc(dbFire, 'positions', guard.force), {
      speed: 0,
      name: guard.name,
      signedIn: false,
      location: new GeoPoint(0, 0),
      battery: {
        level: 'UNKNOWN',
        status: 'UNKNOWN',
        powerMode: false,
      },
    });

    return NextResponse.json({ message: 'Guard was successfully registered' }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: 'Failed to register guard, try again',
      },
      { status: 500 }
    );
  }
}
