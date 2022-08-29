import { Button, Group } from "@mantine/core";
import { openContextModal } from "@mantine/modals";

const DemoModalContextApply = () => {
  return (
    <Group position="center">
      <Button
        onClick={() =>
          openContextModal({
            modal: "demoModalContext",
            title: "Test modal from context",
            innerProps: {
              modalBody:
                "This modal was defined in ModalsProvider, you can open it anywhere in you app with useModals hook",
            },
          })
        }
      >
        Open demonstration context modal
      </Button>
    </Group>
  );
};

export default DemoModalContextApply;
