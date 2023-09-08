import { Modal, ModalBody, ModalContent } from "@nextui-org/react";
import React from "react";
import { Button } from "../ui/button";
import AddDepartmentForm from "../forms/AddDepartmentForm";

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  loading?: boolean;
}

const AddDepartmentModal: React.FC<AlertModalProps> = ({
    isOpen,
    loading,
    onClose,
  }) => {
  return(
    <Modal
    size="2xl"
    isOpen={isOpen}
    onClose={onClose}
    hideCloseButton
  >
    <ModalContent>
      {(onClose) => (
        <>
          <ModalBody className="flex flex-col items-center justify-center p-8 text-center">
            <h1 className="font-bold text-[22px]">Add Department</h1>
            <p className="font-normal text-[16px]">
              <AddDepartmentForm onClose={onClose} />
            </p>
          </ModalBody>
        </>
      )}
    </ModalContent>
  </Modal>
  );
};

export default AddDepartmentModal;
