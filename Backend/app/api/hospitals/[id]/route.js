import { NextResponse } from "next/server";

const hospitals = [
  { id: "1", name: "Sushila Tiwari Government Hospital", city: "Haldwani", state: "Uttarakhand", emergency: true, phone: "7894561230" },
  { id: "2", name: "Krishna Hospital", city: "Haldwani", state: "Uttarakhand", emergency: true, phone: "9412087654" },
  { id: "3", name: "B.D. Pandey Hospital", city: "Nainital", state: "Uttarakhand", emergency: true, phone: "9876543210" }
];

export async function GET(req, { params }) {
  const hospital = hospitals.find((h) => h.id === params.id);

  return NextResponse.json(hospital || {});
}