"use client";

import React from "react";
import { Modal, ModalBody, ModalContent } from "@nextui-org/react";
import { Button } from "../ui/button";

const ResetPassword = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void; }) => {
  return (
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
              <h1 className="font-bold text-[22px]">Verification</h1>
              <p className="font-normal text-[16px]">
                We have sent a Verification Key to your registered email id.
                Press CLOSE button below to close this panel and reset your
                password using this key. Please check your Spam folder if you
                are unable to locate the Verification Key in your Inbox.
              </p>
              <Button onClick={onClose} className="px-6 bg-[#4F5FF6] hover:bg-primary-600">Close</Button>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ResetPassword;
