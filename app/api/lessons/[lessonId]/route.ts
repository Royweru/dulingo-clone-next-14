import db from "@/db/drizzle";
import { lessons } from "@/db/schema";
import { eq } from "drizzle-orm";

import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/admin";

export async function GET(
  req: Request,
  { params }: { params: { lessonId: number } }
) {
  if (!isAdmin()) return new NextResponse("Unauthorized", { status: 401 });

  const data = await db.query.courses.findFirst({
    where: eq(lessons.id, params.lessonId),
  });

  return NextResponse.json(data);
}

export async function PUT(
  req: Request,
  { params }: { params: { lessonId: number } }
) {
  if (!isAdmin()) return new NextResponse("Unauthorized", { status: 401 });

  const body = await req.json();

  const data = await db
    .update(lessons)
    .set({
      ...body,
    })
    .where(eq(lessons.id, params.lessonId));

  return NextResponse.json(data);
}

export async function DELETE(
  req: Request,
  { params }: { params: { lessonId: number } }
) {
  if (!isAdmin()) return new NextResponse("Unauthorized", { status: 401 });

  const body = await req.json();

  const data = await db
    .delete(lessons)
    .where(eq(lessons.id, params.lessonId))
    .returning();

  return NextResponse.json(data[0]);
}
