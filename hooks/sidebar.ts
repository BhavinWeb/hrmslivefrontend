import { create } from "zustand";

interface useStoreModalSidebar {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useSidebarModal = create<useStoreModalSidebar>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
