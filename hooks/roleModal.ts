import { userListColums } from "@/app/(root)/rolelist/components/columns";
import { create } from "zustand";

interface useStoreModalRole {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  data: userListColums;
  newData: userListColums;
  setData: (data: userListColums) => void;
}

export const useRoleModal = create<useStoreModalRole>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  data: { id: 0, name: "", status: 1 },
  newData: { id: 0, name: "", status: 1 },
  setData: (data) => set({ data: data }),
}));
