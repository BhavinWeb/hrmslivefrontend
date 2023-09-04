"use client";

import React from "react";
import { Modal, ModalBody, ModalContent } from "@nextui-org/react";
import { Button } from "@/components/ui/button";

const DeleteModal = ({
  isOpen,
  onClose,
  title,
  onConform
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  onConform: () => void;
}) => {
  return (
    <Modal size="xl" isOpen={isOpen} onClose={onClose} hideCloseButton>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody className="flex flex-col items-center justify-center p-6 text-center gap-5">
              <div>
                <h1 className="text-2xl font-bold">Are your sure?</h1>
                <p className="text-lg font-normal leading-9">
                  Are you sure to remove this Employee from {title}?
                </p>
              </div>
              <div className="flex justify-end gap-2">
                <Button
                  type="submit"
                  className="bg-indigo-500 hover:bg-indigo-700 rounded-sm"
                  onClick={onConform}
                >
                  Remove
                </Button>
                <Button
                  type="reset"
                  className="bg-indigo-500 bg-opacity-20 hover:bg-indigo-500 hover:bg-opacity-30 rounded-sm text-indigo-500 text-base font-semibold"
                  onClick={onClose}
                >
                  Cancel
                </Button>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default DeleteModal;
