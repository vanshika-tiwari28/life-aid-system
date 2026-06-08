import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Donor from "@/models/donor";

// 👉 GET all donors
export async function GET() {
  await connectDB();

  try {
    const donors = await Donor.find();
    return NextResponse.json(donors);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// 👉 POST donor
export async function POST(req) {
  await connectDB();

  try {
    const body = await req.json();
    const donor = await Donor.create(body);

    return NextResponse.json(donor, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}