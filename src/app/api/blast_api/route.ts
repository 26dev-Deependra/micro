export async function POST(req: Request) {
  try {
    const API_URL = "http://13.233.5.230/blast"; // Flask API endpoint
    const API_KEY = "your_hardcoded_api_key";

    const requestBody = await req.json(); // Expecting JSON { sequence: "..." }
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY,
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error response from API:", errorText);
      return new Response(errorText, { status: response.status });
    }

    const data = await response.json();

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error("Proxy error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
