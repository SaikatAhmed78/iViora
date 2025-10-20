import { create } from "zustand";

const defaultState = {
  color: "#2e2c2e",
  scale: 0.08,
  lighting: "studio",
  rotationEnabled: true,
};

const useMacbookStore = create((set) => ({
  ...defaultState,

  setColor: (color) => set({ color }),
  setScale: (scale) => set({ scale }),
  setLighting: (lighting) => set({ lighting }),
  toggleRotation: () =>
    set((state) => ({ rotationEnabled: !state.rotationEnabled })),

  reset: () => set(defaultState),
}));

export default useMacbookStore;
