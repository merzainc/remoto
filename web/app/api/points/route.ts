import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const points = await db.checkPoint.findMany();
  return NextResponse.json(points);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body) return NextResponse.json({ message: 'Checkpoint name field is required' });
    let point = await db.checkPoint.findFirst({
      where: {
        name: body.name,
      },
    });

    if (point) return NextResponse.json({ message: 'Checkpoint already created' }, { status: 400 });

    point = await db.checkPoint.create({
      data: {
        name: body.name,
        lat: body.lat,
        lng: body.lng,
      },
    });
    if (point) {
      return NextResponse.json(point, { status: 201 });
    }
    return NextResponse.json(
      { message: 'Failed to created checkpoint, try again' },
      { status: 400 }
    );
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
