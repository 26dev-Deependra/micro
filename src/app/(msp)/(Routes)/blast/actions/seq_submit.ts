// submitProteinSequence.ts
export const submitProteinSequence = async (
  sequence: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setResults: (matches: any[]) => void
) => {
  console.log("🚀 Submitting protein sequence:", sequence);

  const API_URL = "/api/blast_api";
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sequence }),
    });

    console.log("✅ Response status:", response.status);

    if (!response.ok) {
      throw new Error(`Submission failed: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("📩 BLAST Results:", data);

    setResults(data.matches); // Call Zustand's setter from the component
    return data.matches;
  } catch (error) {
    console.error("❌ Fetch error:", error);
    throw error;
  }
};
