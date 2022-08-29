import { FC, useState, useEffect } from "react";
import { TextInput, Button, Group } from "@mantine/core";
import { openModal, closeAllModals } from "@mantine/modals";

interface IRegisterEmailModalProps {
  email: string;
  setEmail: (value: string) => void;
  onSubmit: () => void;
}

const RegisterEmailModal: FC<IRegisterEmailModalProps> = ({
  email,
  setEmail,
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
                <TextInput
                  value={email}
                  onChange={(event) => setEmail(event.currentTarget.value)}
                />
                <Button onClick={onSubmit}>Submit</Button>
              </>
            ),
          });
        }}
      >
        Open content Modal V1
      </Button>
    </Group>
  );
};

export default RegisterEmailModal;
