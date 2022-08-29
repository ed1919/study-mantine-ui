import { FC, useState } from "react";
import { ContextModalProps } from "@mantine/modals";
import { TextInput, Button } from "@mantine/core";

const CustomerRegisterModalContext: FC<
  ContextModalProps<{
    onSubmit: (email: string) => void;
  }>
> = ({ context, id, innerProps }) => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = () => {
    innerProps.onSubmit(email);
    context.closeModal(id);
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

export default CustomerRegisterModalContext;
