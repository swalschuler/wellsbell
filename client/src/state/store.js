import { create } from "zustand";

const useStore = create((set) => ({
  checked: false,
  toggle: () => {
    set((state) => ({ checked: !state.checked }));
  },
}));

export default useStore;
