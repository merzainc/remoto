import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const guard = await db.guard.findUnique({
      where: {
        force: params.id,
      },
    });
    if (!guard)
      return NextResponse.json(
        { message: 'No guard was found matching the record.' },
        { status: 404 }
      );
    return NextResponse.json(guard, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const guard = await db.guard.findUnique({
      where: {
        force: params.id,
      },
    });
    if (!guard)
      return NextResponse.json(
        { message: 'No guard was found with given force number.' },
        { status: 404 }
      );

    await db.guard.delete({
      where: {
        force: guard.force,
      },
    });
    return NextResponse.json(
      { message: 'Guard was successfully removed from database' },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ message: 'Failed to delete guard, try again' }, { status: 400 });
  }
}
