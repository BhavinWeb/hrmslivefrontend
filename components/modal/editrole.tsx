"use client";
import React, { useEffect, useState } from "react";
import { Modal } from "../ui/Model";
import CompanyRoleform from "../forms/CompanyRoleform";
import { useRoleModal } from "@/hooks/roleModal";

const RoleModal = () => {
  const [isMounted, setIsMounted] = useState(false);
  const roleModal = useRoleModal();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      title={roleModal.data.id != 0 ? "Updated Role" : "Add Role"}
      description="Mange your role"
      isOpen={roleModal.isOpen}
      onClose={roleModal.onClose}
    >
      <CompanyRoleform data={roleModal.data} />
    </Modal>
  );
};

export default RoleModal;
