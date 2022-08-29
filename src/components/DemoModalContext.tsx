import { ContextModalProps } from "@mantine/modals";
import { Text, Button } from "@mantine/core";

const DemoModalContext = ({
  context,
  id,
  innerProps,
}: ContextModalProps<{ modalBody: string }>) => (
  <>
    <Text size="sm">{innerProps.modalBody}</Text>
    <Button fullWidth mt="md" onClick={() => context.closeModal(id)}>
      Close modal
    </Button>
  </>
);

export default DemoModalContext;
