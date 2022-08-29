import { FC, useState, useEffect } from "react";
import { TextInput, Button, Group } from "@mantine/core";
import { openModal, closeAllModals } from "@mantine/modals";

interface IRegisterEmailModalProps {
  onSubmit: (value: string) => void;
}

interface IModalContentProps extends IRegisterEmailModalProps {}

const ModalContent: FC<IModalContentProps> = ({
  onSubmit,
}) => {
  const [localText, setLocalText] = useState<string>("");

  const handleChange = (text: string) => {
    setLocalText(text);
  };

  return (
    <>
      <TextInput
        label="Your email"
        value={localText}
        onChange={(event) => handleChange(event.currentTarget.value)}
      />

      <Button fullWidth onClick={() => onSubmit(localText)} mt="md">
        Submit
      </Button>
    </>
  );
};

const RegisterEmailModal: FC<IRegisterEmailModalProps> = ({
  onSubmit,
}) => {
  return (
    <Group position="center">
      <Button
        onClick={() => {
          openModal({
            title: "Enter your email to register",
            children: (
              <>
                <ModalContent
                  onSubmit={onSubmit}
                />
              </>
            ),
          });
        }}
      >
        Open content Modal
      </Button>
    </Group>
  );
};

export default RegisterEmailModal;
