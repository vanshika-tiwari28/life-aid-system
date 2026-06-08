import { connectDB } from "@/lib/db";
import SOS from "@/models/SOS";

// ✅ POST → Save SOS
export async function POST(req) {
  try {
    console.log("🚨 SOS API HIT");

    await connectDB();

    const data = await req.json();

    const { latitude, longitude } = data;

    console.log("📍 Latitude:", latitude);
    console.log("📍 Longitude:", longitude);

    // ✅ Save to MongoDB
    const saved = await SOS.create({ latitude, longitude });

    console.log("✅ Saved SOS:", saved);

    return new Response(
      JSON.stringify({
        success: true,
        message: "SOS saved successfully 🚑",
      }),
      {
        status: 200,
        headers: corsHeaders(),
      }
    );

  } catch (error) {
    console.error("❌ ERROR:", error);

    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to process SOS",
      }),
      {
        status: 500,
        headers: corsHeaders(),
      }
    );
  }
}

// ✅ GET
export async function GET() {
  return new Response(
    JSON.stringify({ message: "SOS API working" }),
    {
      status: 200,
      headers: corsHeaders(),
    }
  );
}

// ✅ OPTIONS (CORS fix)
export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: corsHeaders(),
  });
}

// ✅ CORS headers
function corsHeaders() {
  return {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}