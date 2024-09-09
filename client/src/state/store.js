import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      checked: false,
      toggle: () => {
        set((state) => ({ checked: !state.checked }));
      },
    }),
    { name: "wells-bell" }
  )
);

export default useStore;
