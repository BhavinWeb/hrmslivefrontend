import { userListColums } from "@/app/(root)/userlist/components/columns";
import { create } from "zustand";

interface useStoreModalUser {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  data: userListColums;
  newData: userListColums;
  setData: (data: userListColums) => void;
}

export const useUserModal = create<useStoreModalUser>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  data: { id: 0, name: "", email: "", role_id: 0 },
  newData: { id: 0, name: "", email: "", role_id: 0 },
  setData: (data) => set({ data: data }),
}));
