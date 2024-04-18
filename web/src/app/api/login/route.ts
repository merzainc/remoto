//@ts-nocheck
import { db } from '@/helpers';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
import z from 'zod';

const UserSchema = z.object({
  force: z.string({ required_error: `Remoto ID field is required` }),
  password: z.string({ required_error: 'Password field is required' }),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = UserSchema.safeParse(body);
    if (result.error) {
      return NextResponse.json(
        { message: result.error.issues[0].message },
        { status: 400 }
      );
    }

    const guard = await db.guard.findFirst({
      where: {
        force: body.force,
      },
    });
    if (!guard) {
      return NextResponse.json(
        { message: 'No guard was found matching the records.' },
        {
          status: 400,
        }
      );
    }
    const isPasswordValid = await bcrypt.compare(body.password, guard.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { message: 'These credentials do not match our records.' },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json(
      {
        guard: {
          name: guard.name,
          force: guard.force,
          email: guard.email,
        },
      },
      { status: 200 }
    );
  } catch (err: any) {
    return new NextResponse(
      JSON.stringify({
        message: 'An error occurred, try again',
      }),
      { status: 500 }
    );
  }
}
