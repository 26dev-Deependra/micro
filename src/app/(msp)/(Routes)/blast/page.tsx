"use client";

import { useState } from "react";
import { submitProteinSequence } from "../blast/actions/seq_submit"; // Import the function
import { useBlastStore } from "@/app/lib/store"; // Zustand store
import { SectionTitle } from "../../components/SectionTitle";

export default function BlastPage() {
  const setResults = useBlastStore((state) => state.setResults);
  const results = useBlastStore((state) => state.results);
  const [sequence, setSequence] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitProteinSequence(sequence, setResults);
    } catch (err) {
      console.error("Blast error:", err);
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto p-6">
      <SectionTitle preTitle="" title="BLAST Protein Analysis">
        BLAST Protein Analysis Tool is our custom-built solution for rapid and
        reliable protein sequence comparison.This tool enables users to input a
        protein sequence and instantly identify similar proteins across curated
        databases for Salmonella Typhi, helps uncover functional insights,
        evolutionary relationships, and potential drug targets related to
        salmonella Typhi.
      </SectionTitle>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={sequence}
          onChange={(e) => setSequence(e.target.value)}
          placeholder="Enter protein sequence...(FASTA Formate only)"
          className="w-full p-2 border border-gray-300 rounded"
          rows={3}
          required
        />
        <button type="submit" className="bg-green-600 text-white p-2 rounded">
          {loading ? "Analyzing..." : "Submit Sequence"}
        </button>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {results.length === 1 ? (
          <div className="text-center text-green-600 font-mono mt-10">
            No matching proteins found for the given sequence.
          </div>
        ) : (
          results.map((match, index) => (
            <div
              key={index}
              className="bg-white border dark:bg-gray-900 border-gray-300 rounded-xl p-8 shadow hover:shadow-md transition-all mt-10 duration-200"
            >
              <div className="text-sm font-mono text-gray-600 mb-1">
                <span className="text-green-600 font-semibold">
                  Protein_id:
                </span>{" "}
                <a
                  href={match.ncbi_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-green-600 hover:text-blue-800 break-all"
                >
                  {match.subject_id}
                </a>
              </div>

              <div className="text-sm font-mono text-gray-600 mb-1">
                <span className="text-green-600 font-semibold">identity:</span>{" "}
                {match.identity}%
              </div>

              <div className="text-sm font-mono text-gray-600 mb-1">
                <span className="text-green-600 font-semibold">
                  alignment_length:
                </span>{" "}
                {match.alignment_length}
              </div>

              <div className="text-sm font-mono text-gray-600 mb-1">
                <span className="text-green-600 font-semibold">bit_score:</span>{" "}
                {match.bit_score}
              </div>

              <div className="text-sm font-mono text-gray-600 mb-1">
                <span className="text-green-600 font-semibold">e_value:</span>{" "}
                {match.e_value}
              </div>

              <div className="text-sm font-mono text-gray-600 mb-1">
                <span className="text-green-600 font-semibold">
                  mismatches:
                </span>{" "}
                {match.mismatches}
              </div>

              <div className="text-sm font-mono text-gray-600 mb-1">
                <span className="text-green-600 font-semibold">gaps:</span>{" "}
                {match.gaps}
              </div>

              <div className="text-sm font-mono text-gray-600 mb-1">
                <span className="text-green-600 font-semibold">organism:</span>{" "}
                {match.organism || "N/A"}
              </div>

              <div className="text-sm font-mono text-gray-600 mb-1">
                <span className="text-green-600 font-semibold">
                  description:
                </span>{" "}
                {match.description || "N/A"}
              </div>

              <div className="text-sm font-mono text-gray-600">
                <span className="text-green-600 font-semibold">sequence:</span>{" "}
                <span className="break-all block bg-gray-100 dark:bg-gray-900 rounded p-1 mt-1 text-gray-600">
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
          ))
        )}
      </div>
    </div>
  );
}
