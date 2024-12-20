// Store untuk pengaturan tema //

import { create } from "zustand";

const useThemeStore = create((set) => ({
  darkMode: true, // Set default dark mode
  toggleTheme: () =>
    set((state) => ({
      darkMode: !state.darkMode,
    })),
}));

export default useThemeStore;
