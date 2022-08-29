import { Button, Group } from "@mantine/core";
import { openContextModal } from "@mantine/modals";

const OpenModalBtn = () => {
  const onSubmit = (email: string) => {
    alert(`Email: ${email}`);
  };

  return (
    <Group position="center">
      <Button
        onClick={() =>
          openContextModal({
            modal: "customerRegisterModalContext",
            title: "Test modal from context",
            innerProps: { onSubmit: onSubmit },
          })
        }
      >
        Open demonstration context modal
      </Button>
    </Group>
  );
};

export default OpenModalBtn;
