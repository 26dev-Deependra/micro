export async function POST(req: Request) {
  try {
    const API_URL = "http://3.110.54.157/CvPredict"; // Flask api endpoint.
    const API_KEY = "your_hardcoded_api_key"; // Flask api endpoint key.

    const formData = await req.formData();

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "x-api-key": API_KEY,
      },
      body: formData,
    }); // Fetching the results out from api endpoint.

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
