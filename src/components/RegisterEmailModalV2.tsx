import { FC, useState, useEffect } from "react";
import { TextInput, Button, Group } from "@mantine/core";
import { openModal, closeAllModals } from "@mantine/modals";
import { text } from "stream/consumers";

interface IRegisterEmailModalV2Props {
  onSubmit: (value: string) => void;
}

const RegisterEmailModalV2: FC<IRegisterEmailModalV2Props> = ({ onSubmit }) => {
  const [localText, setLocalText] = useState<string>("");

  const handleChange = (text: string) => {
    setLocalText(text);
  };

  return (
    <Group position="center">
      <Button
        onClick={() => {
          openModal({
            title: "Enter your email to register",
            children: (
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
            ),
          });
        }}
      >
        Open content Modal
      </Button>
    </Group>
  );
};

export default RegisterEmailModalV2;
