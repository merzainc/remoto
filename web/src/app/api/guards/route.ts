import { db } from '@/helpers';
import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';
import z from 'zod';

const GuardSchema = z.object({
  name: z
    .string({ required_error: `Name field is required` })
    .min(3, { message: 'Name should be at least 3 characters' })
    .max(50),
  force: z.string().min(6, { message: 'Invalid Remoto ID' }),
  password: z.string({ required_error: 'Password field is required' }),
  email: z.string().email({ message: 'Invalid email format supplied' }),
});

export async function GET(req: NextRequest) {
  const guards = await db.guard.findMany();
  return NextResponse.json(guards);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
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
      return NextResponse.json(
        { message: 'Guard already registered' },
        { status: 400 }
      );
    }
    guard = await db.guard.create({
      data: {
        name: body.name,
        force: body.force,
        password: hashed_password,
        email: body.email,
      },
    });

    return NextResponse.json(
      { message: 'Guard was successfully registered' },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Failed to register guard, try again',
      },
      { status: 500 }
    );
  }
}
