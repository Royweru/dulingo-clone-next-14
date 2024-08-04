import db from "@/db/drizzle";
import { courses, units } from "@/db/schema";
import { eq, param } from "drizzle-orm";

import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/admin";

export async function GET(
  req: Request,
  { params }: { params: { unitId: number } }
) {
  if (!isAdmin()) return new NextResponse("Unauthorized", { status: 401 });

  const data = await db.query.units.findFirst({
    where: eq(units.id, params.unitId),
  });

  return NextResponse.json(data);
}

export async function PUT(
  req: Request,
  { params }: { params: { unitId: number } }
) {
  if (!isAdmin()) return new NextResponse("Unauthorized", { status: 401 });

  const body = await req.json();

  const data = await db
    .update(units)
    .set({
      ...body,
    })
    .where(eq(units.id, params.unitId));

  return NextResponse.json(data);
}

export async function DELETE(
  req: Request,
  { params }: { params: { unitId: number } }
) {
  if (!isAdmin()) return new NextResponse("Unauthorized", { status: 401 });

  const body = await req.json();

  const data = await db
    .delete(units)
    .where(eq(units.id, params.unitId))
    .returning();

  return NextResponse.json(data[0]);
}
