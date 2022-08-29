import { TextInput, Button, Group } from "@mantine/core";
import { openModal, closeAllModals } from "@mantine/modals";

const DemoModalCustom = () => {
  return (
    <Group position="center">
      <Button
        onClick={() => {
          openModal({
            title: "Subscribe to newsletter",
            children: (
              <>
                <TextInput
                  label="Your email"
                  placeholder="Your email"
                  data-autofocus
                />
                <Button fullWidth onClick={() => closeAllModals()} mt="md">
                  Submit
                </Button>
              </>
            ),
          });
        }}
      >
        Open content modal
      </Button>
    </Group>
  );
};

export default DemoModalCustom;
