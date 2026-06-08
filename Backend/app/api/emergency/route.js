import { connectDB } from "@/lib/db";
import Emergency from "@/models/emergency";

// ✅ POST request
export async function POST(req) {
  try {
    console.log("🔥 API HIT");

    await connectDB();

    const body = await req.json();
    console.log("📦 Incoming Data:", body);

    const saved = await Emergency.create(body);

    console.log("✅ Saved:", saved);

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: corsHeaders(),
      }
    );
  } catch (error) {
    console.error("❌ ERROR:", error);

    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: corsHeaders(),
      }
    );
  }
}

// ✅ VERY IMPORTANT (fixes Failed to fetch)
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
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}