import { Button, MantineProvider, Text } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import DemoModalContext from "./components/DemoModalContext";
import ChannelBar from "./components/work/channelBar/ChannelBar";
import { useEffect, useState } from "react";

// Interface / Types
import { IChannelSelection } from "./components/work/channelBar/ChannelBar";

// Work
import CustomerRegisterModalContext from "./components/work/CustomerRegisterModalContext";

import { openContextModal } from "@mantine/modals";
import ContactUs from "./components/work/contactUs/ContactUs";

const channelSelections: IChannelSelection[] = [
  {
    label: "ChannelNo1",
    value: "1",
  },

  {
    label: "ChannelNo2",
    value: "2",
  },

  {
    label: "ChannelNo3",
    value: "3",
  },

  {
    label: "ChannelNo4",
    value: "4",
  },
];

export default function App() {
  const [selectedChannel, setSelectedChannel] = useState<string>(
    channelSelections[0].value
  );

  const channelName = "ChannelNo1";

  const onClickChannelBtn = () => {
    alert(`Channel selected: ${selectedChannel}`);
  };

  const handleClickOpenContextBtn = () => {
    openContextModal({
      modal: "customerRegisterModalContext",
      title: "Test modal from context",
      innerProps: {
        modalBody:
          "This modal was defined in ModalsProvider, you can open it anywhere in you app with useModals hook",
      },
    });
  };

  useEffect(() => {
    console.log("selectedChannel", selectedChannel);
  }, [selectedChannel]);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <ModalsProvider
        modals={{
          demoModalContext: DemoModalContext,
          customerRegisterModalContext: CustomerRegisterModalContext,
        }}
        labels={{ confirm: "Submit", cancel: "Cancel" }}
      >
        <Text>Welcome to Mantine!</Text>
        <ChannelBar
          channelName={channelName}
          channelSelections={channelSelections}
          selectedChannel={selectedChannel}
          setSelectedChannel={setSelectedChannel}
          onClickBtn={onClickChannelBtn}
        />

        <Button onClick={handleClickOpenContextBtn}>Open Context Modal</Button>
        <ContactUs />
      </ModalsProvider>
    </MantineProvider>
  );
}
