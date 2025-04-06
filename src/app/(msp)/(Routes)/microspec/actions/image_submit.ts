export const uploadImageToAWS = async (imageFile: File) => {
  console.log("🚀 Function called with file:", imageFile);

  const API_URL = "/api/proxy"; // Use Next.js API route instead of Flask API
  const formData = new FormData();
  formData.append("file", imageFile);

  console.log("🔄 Sending request to:", API_URL);

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      body: formData,
    });

    console.log("✅ Response status:", response.status);

    if (!response.ok) {
      throw new Error(`Upload failed: ${response.statusText}`);
    }

    const data: { optical_density: number } = await response.json();

    console.log("📩 Optical Density:", data.optical_density);
    return data.optical_density;
  } catch (error) {
    console.error("❌ Fetch error:", error);
    throw error;
  }
};
