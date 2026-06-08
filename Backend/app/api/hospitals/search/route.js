import { NextResponse } from "next/server";

const hospitals = [
   { id: 1, name: "Sushila Tiwari Government Hospital", city: "Haldwani", state: "Uttarakhand", emergency: true, phone: "7894561230" },
  { id: 2, name: "Krishna Hospital", city: "Haldwani", state: "Uttarakhand", emergency: true, phone: "9412087654" },
  { id: 3, name: "Soban Singh Jeena Base Hospital", city: "Haldwani", state: "Uttarakhand", emergency: true, phone: "5946250001" },
  { id: 4, name: "City Hospital Haldwani", city: "Haldwani", state: "Uttarakhand", emergency: true, phone: "9412987650" },
  { id: 5, name: "Jeevan Rekha Hospital", city: "Haldwani", state: "Uttarakhand", emergency: true, phone: "9634123456" },
  { id: 6, name: "Aarogya Hospital", city: "Haldwani", state: "Uttarakhand", emergency: true, phone: "9760345678" },

  { id: 7, name: "B.D. Pandey Hospital", city: "Nainital", state: "Uttarakhand", emergency: true, phone: "9876543210" },
  { id: 8, name: "CHC Bhimtal", city: "Bhimtal", state: "Uttarakhand", emergency: true, phone: "1234567890" }
];

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const area = searchParams.get("area");

  let result = hospitals;

  if (area) {
    result = hospitals.filter((h) =>
      h.city.toLowerCase().includes(area.trim().toLowerCase())
    );
  }

  return NextResponse.json(result, {
    headers: {
      "Access-Control-Allow-Origin": "*",   // ✅ FIX CORS
      "Access-Control-Allow-Methods": "GET",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}