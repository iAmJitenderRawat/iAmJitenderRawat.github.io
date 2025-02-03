import React from "react";
import {
    Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import resume from "../assests/pdf/JitenderResume.pdf";

const PdfModal = () => {
      const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button leftIcon={<DownloadIcon />} onClick={onOpen} bg={"blue.600"}>
        Resume
      </Button>
      <Modal onClose={onClose} size={"full"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Resume</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <iframe
              src={"https://arxiv.org/pdf/quant-ph/0410100.pdf"}
              width={"100%"}
              //   height={"100vh"}
                type="application/pdf"
            />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PdfModal;
