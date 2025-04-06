export async function POST(req: Request) {
  console.log("🚀 Protein BLAST proxy function called");

  try {
    const API_URL = "http://13.233.5.230/blast"; // Replace with your Flask API endpoint
    const API_KEY = "your_hardcoded_api_key";

    console.log("🔄 Forwarding request to:", API_URL);

    const requestBody = await req.json(); // Expecting JSON { sequence: "..." }
    console.log(requestBody);
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY,
      },
      body: JSON.stringify(requestBody),
    });

    console.log("✅ Response status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ Error response from API:", errorText);
      return new Response(errorText, { status: response.status });
    }

    const data = await response.json();
    console.log("📩 API Response:", data);

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error("❌ Proxy error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
