"use client";
import React, { useEffect, useState } from "react";
import { Modal } from "../ui/Model";
import UserUpdateForm from "../forms/updateUserFoem";
import { useUserModal } from "@/hooks/userModal";
import UserRegisterform from "../forms/UserRegiterform";

const EditUserModal = () => {
  const [isMounted, setIsMounted] = useState(false);
  const roleModal = useUserModal();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      title={roleModal.data.id != 0 ? "Updated Employe" : "Add Employe"}
      description="Mange Employe"
      isOpen={roleModal.isOpen}
      onClose={roleModal.onClose}
    >
      {roleModal.data.id != 0 ? (
        <UserUpdateForm data={roleModal.data} />
      ) : (
        <UserRegisterform />
      )}
    </Modal>
  );
};

export default EditUserModal;
