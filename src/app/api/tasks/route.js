import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request) {
  const tasks = await prisma.task.findMany();
  return NextResponse.json(tasks);
}

export async function POST(request) {
  try {
    const { title, description, email } = await request.json();

    const newTask = await prisma.task.create({
      data: {
        title,
        description,
        email
      }
    });
    return NextResponse.json(newTask);
  } catch (error) {
    return NextResponse.json(error.message);
  }
}
