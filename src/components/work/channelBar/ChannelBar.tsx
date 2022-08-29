import { createStyles, Select, Button } from "@mantine/core";

interface IChannelBarProps {
  channelName: string;
  channelSelections: IChannelSelection[];
  selectedChannel: any;
  setSelectedChannel: (value: any) => void;
  onClickBtn: () => void;
}

export interface IChannelSelection {
  label: string;
  value: any;
}

const useStyles = createStyles((theme, _params, getRef) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    border: "1px solid red",
  },

  selectWrapper: {
    display: "flex",
    alignItems: "center",
  },

  selectLabel: {
    paddingRight: 4,
  },
}));

const ChannelBar: React.FC<IChannelBarProps> = ({
  channelName,
  channelSelections,
  selectedChannel,
  setSelectedChannel,
  onClickBtn,
}) => {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <div>{`Channel Name: ${channelName}`}</div>
      <div className={classes.selectWrapper}>
        <div className={classes.selectLabel}>Channel Selection: </div>
        <Select
          placeholder="Pick one"
          value={selectedChannel}
          onChange={setSelectedChannel}
          data={channelSelections}
        />
      </div>
      <Button onClick={onClickBtn}>I'm a Button</Button>
    </div>
  );
};

export default ChannelBar;
