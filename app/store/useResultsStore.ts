import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useResultStore = create(
  persist(
    (set) => ({
      result: null,
      setResult: (data: any) => set({ result: data }),
      clearResult: () => set({ result: null }),
    }),
    {
      name: "result-storage",
    },
  ),
);
