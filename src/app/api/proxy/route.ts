export async function POST(req: Request) {
  console.log("🚀 Proxy function called");

  try {
    const API_URL = "http://13.233.5.230/CvPredict"; // Replace with your Flask API URL
    const API_KEY = "your_hardcoded_api_key";

    console.log("🔄 Forwarding request to:", API_URL);

    const formData = await req.formData();

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "x-api-key": API_KEY,
      },
      body: formData,
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
