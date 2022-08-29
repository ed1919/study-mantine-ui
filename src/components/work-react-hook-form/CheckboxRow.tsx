import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

export default function ControlledCheckbox({ setValue }: { setValue: any }) {
  const [checked, setChecked] = useState(true);
  const [onlineMode, setOnlineMode] = useState<number>(0);

  console.log("onlineMode", onlineMode);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedOnlineMode = Number(event.target.value);
    setOnlineMode(selectedOnlineMode);
    setValue("onlineMode", selectedOnlineMode);
  };

  const onlineModes = [
    {
      label: "online",
      value: 0,
    },
    {
      label: "offline",
      value: 1,
    },
  ];

  return (
    <>
      {onlineModes.map((item) => {
        return (
          <div
            key={item.value}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Checkbox
              value={item.value}
              checked={item.value === onlineMode}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>
        );
      })}
    </>
  );
}
