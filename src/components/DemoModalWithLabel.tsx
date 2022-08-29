import { Button, Text } from "@mantine/core";
import { openConfirmModal } from "@mantine/modals";

const DemoModalWithLabel = () => {
  const openDeleteModal = () =>
    openConfirmModal({
      title: "Delete your profile",
      centered: true,
      children: (
        <Text size="sm">
          Are you sure you want to delete your profile? This action is
          destructive and you will have to contact support to restore your data.
        </Text>
      ),
      labels: { confirm: "Delete account", cancel: "No don't delete it" },
      confirmProps: { color: "red" },
      onCancel: () => console.log("Cancel"),
      onConfirm: () => console.log("Confirmed"),
    });

  return (
    <Button onClick={openDeleteModal} color="red">
      Delete account
    </Button>
  );
};

export default DemoModalWithLabel;
