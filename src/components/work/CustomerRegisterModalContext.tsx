import { FC, useState } from "react";
import { ContextModalProps, closeAllModals } from "@mantine/modals";
import { TextInput, Button } from "@mantine/core";

interface IModalContentProps {
  onSubmit: (email: string) => void;
}

const ModalContent: React.FC<IModalContentProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = () => {
    onSubmit(email);
    closeAllModals();
  };

  return (
    <>
      <TextInput
        label="Your email:"
        placeholder="Your email"
        data-autofocus
        value={email}
        onChange={(event) => setEmail(event.currentTarget.value)}
      />
      <Button fullWidth onClick={handleSubmit} mt="md">
        Submit
      </Button>
    </>
  );
};

const CustomerRegisterModalContext: FC<
  ContextModalProps<{
    onSubmit: (email: string) => void;
  }>
> = ({ context, id, innerProps }) => (
  <>
    <ModalContent onSubmit={innerProps.onSubmit} />
  </>
);

export default CustomerRegisterModalContext;
