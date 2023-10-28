import { create } from "zustand";

export const useModals = create<{
  siteMap: boolean;
  setSiteMap: (payload: boolean) => void;
}>((set) => ({
  siteMap: false,
  setSiteMap: (payload) =>
    set(() => ({
      siteMap: payload,
    })),
}));
