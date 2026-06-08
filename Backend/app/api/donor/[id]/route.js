import { NextResponse } from "next/server";
import Donor from "@/models/donor";
import { connectDB } from "@/lib/db";
import mongoose from "mongoose";

export async function GET(req, { params }) {
  await connectDB();

  if (!mongoose.Types.ObjectId.isValid(params.id)) {
    return NextResponse.json({ message: "Invalid ID" }, { status: 400 });
  }

  const donor = await Donor.findById(params.id);

  if (!donor)
    return NextResponse.json({ message: "Not found" }, { status: 404 });

  return NextResponse.json(donor);
}

export async function PUT(req, { params }) {
  await connectDB();

  const body = await req.json();

  const donor = await Donor.findByIdAndUpdate(params.id, body, {
    new: true,
  });

  return NextResponse.json(donor);
}

export async function DELETE(req, { params }) {
  await connectDB();

  await Donor.findByIdAndDelete(params.id);

  return NextResponse.json({ message: "Deleted" });
}