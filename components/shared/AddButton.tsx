"use client";

import React from "react";
import { Button } from "../ui/button";
import { useRoleModal } from "@/hooks/roleModal";
import { useUserModal } from "@/hooks/userModal";

const AddButton = ({
  title,
  isUserR,
}: {
  title: string;
  isUserR?: boolean;
}) => {
  const roleModal = useRoleModal();
  const userModal = useUserModal();

  const onClickHandler = () => {
    if (isUserR) {
      userModal.setData(userModal.newData);
      userModal.onOpen();
    } else {
      roleModal.setData(roleModal.newData);
      roleModal.onOpen();
    }
  };
  return (
    <Button variant="gradient" onClick={onClickHandler}>
      {title}
    </Button>
  );
};

export default AddButton;
