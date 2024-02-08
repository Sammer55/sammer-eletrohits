import { create } from "zustand";

type Store = {};

export const useStore = create<Store>(() => ({}));
