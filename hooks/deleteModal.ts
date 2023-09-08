import { create } from "zustand";

interface useStoreModalDelete {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useDeleteModal = create<useStoreModalDelete>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
