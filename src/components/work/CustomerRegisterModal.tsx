import { useState, useEffect } from "react";
import { TextInput, Button } from "@mantine/core";
import { openModal, closeAllModals } from "@mantine/modals";

interface ICustomerRegisterModalProps {
  // TODO: Call API to insert data to database
  onSubmit: (email: string) => void;
}

interface IModalContentProps extends ICustomerRegisterModalProps {}

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
      <Button fullWidth onClick={() => onSubmit(email)} mt="md">
        Submit
      </Button>
    </>
  );
};

const CustomerRegisterModal: React.FC<ICustomerRegisterModalProps> = ({
  onSubmit,
}) => {
  return (
    <Button
      onClick={() => {
        openModal({
          title: "Register to as a customer",
          children: <ModalContent onSubmit={onSubmit} />,
        });
      }}
    >
      Open content modal
    </Button>
  );
};

export default CustomerRegisterModal;
