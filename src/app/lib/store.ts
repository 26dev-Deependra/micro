import { create } from "zustand";

interface BlastResult {
  subject_id: string;
  identity: number;
  bit_score: number;
  e_value: number;
  gaps: number;
  mismatches: number;
  alignment_length: number;
  description: string;
  organism: string;
  sequence: string;
  ncbi_link: string;
}

interface BlastStore {
  results: BlastResult[];
  setResults: (results: BlastResult[]) => void;
  clearResults: () => void;
}

export const useBlastStore = create<BlastStore>((set) => ({
  results: [],
  setResults: (results) => set({ results }),
  clearResults: () => set({ results: [] }),
}));
