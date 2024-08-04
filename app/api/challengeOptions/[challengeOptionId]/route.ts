import db from "@/db/drizzle";
import { challengeOptions } from "@/db/schema";
import { eq } from "drizzle-orm";

import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/admin";

export async function GET(
  req: Request,
  { params }: { params: { challengeOptionId: number } }
) {
  if (!isAdmin()) return new NextResponse("Unauthorized", { status: 401 });

  const data = await db.query.challengeOptions.findFirst({
    where: eq(challengeOptions.id, params.challengeOptionId),
  });

  return NextResponse.json(data);
}

export async function PUT(
  req: Request,
  { params }: { params: { challengeOptionId: number } }
) {
  if (!isAdmin()) return new NextResponse("Unauthorized", { status: 401 });

  const body = await req.json();

  const data = await db
    .update(challengeOptions)
    .set({
      ...body,
    })
    .where(eq(challengeOptions.id, params.challengeOptionId));

  return NextResponse.json(data);
}

export async function DELETE(
  req: Request,
  { params }: { params: { challengeOptionId: number } }
) {
  if (!isAdmin()) return new NextResponse("Unauthorized", { status: 401 });

  const body = await req.json();

  const data = await db
    .delete(challengeOptions)
    .where(eq(challengeOptions.id, params.challengeOptionId))
    .returning();

  return NextResponse.json(data[0]);
}
