"use client";

import { useState } from "react";
import { submitProteinSequence } from "../blast/actions/seq_submit"; // Import the function
import { useBlastStore } from "@/app/lib/store"; // Zustand store

export default function BlastPage() {
  const setResults = useBlastStore((state) => state.setResults);
  const results = useBlastStore((state) => state.results);
  const [sequence, setSequence] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitProteinSequence(sequence, setResults); // 👈 pass it here
    } catch (err) {
      console.error("Blast error:", err);
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">BLAST Protein Analysis</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={sequence}
          onChange={(e) => setSequence(e.target.value)}
          placeholder="Enter protein sequence..."
          className="w-full p-2 border border-gray-300 rounded"
          rows={4}
          required
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">
          {loading ? "Analyzing..." : "Submit"}
        </button>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {results.map((match, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-xl p-8 shadow hover:shadow-md transition-all mt-10 duration-200"
          >
            <div className="text-sm font-mono text-gray-600 mb-1">
              <span className="text-blue-600 font-semibold">Protein_id:</span>{" "}
              <a
                href={match.ncbi_link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-600 hover:text-blue-800 break-all"
              >
                {match.subject_id}
              </a>
            </div>

            <div className="text-sm font-mono text-gray-600 mb-1">
              <span className="text-blue-600 font-semibold">identity:</span>{" "}
              {match.identity.toFixed(2)}%
            </div>

            <div className="text-sm font-mono text-gray-600 mb-1">
              <span className="text-blue-600 font-semibold">
                alignment_length:
              </span>{" "}
              {match.alignment_length}
            </div>

            <div className="text-sm font-mono text-gray-600 mb-1">
              <span className="text-blue-600 font-semibold">bit_score:</span>{" "}
              {match.bit_score.toFixed(2)}
            </div>

            <div className="text-sm font-mono text-gray-600 mb-1">
              <span className="text-blue-600 font-semibold">e_value:</span>{" "}
              {match.e_value.toExponential(2)}
            </div>

            <div className="text-sm font-mono text-gray-600 mb-1">
              <span className="text-blue-600 font-semibold">mismatches:</span>{" "}
              {match.mismatches}
            </div>

            <div className="text-sm font-mono text-gray-600 mb-1">
              <span className="text-blue-600 font-semibold">gaps:</span>{" "}
              {match.gaps}
            </div>

            <div className="text-sm font-mono text-gray-600 mb-1">
              <span className="text-blue-600 font-semibold">organism:</span>{" "}
              {match.organism || "N/A"}
            </div>

            <div className="text-sm font-mono text-gray-600 mb-1">
              <span className="text-blue-600 font-semibold">description:</span>{" "}
              {match.description || "N/A"}
            </div>

            <div className="text-sm font-mono text-gray-600">
              <span className="text-blue-600 font-semibold">sequence:</span>{" "}
              <span className="break-all block bg-gray-100 rounded p-1 mt-1 text-gray-800">
                {match.sequence ? match.sequence : "N/A"}
              </span>
            </div>
            <div className="text-sm font-mono mb-2  text-gray-600">
              <a
                href={match.ncbi_link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-600 hover:text-blue-800 break-all"
              >
                {match.ncbi_link}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
