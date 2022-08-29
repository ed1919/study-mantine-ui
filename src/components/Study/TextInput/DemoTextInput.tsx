import React, { useState, useEffect } from "react";
import { TextInput, Button, Group } from "@mantine/core";

const DemoTextInput = () => {
  const [demoText, setDemoText] = useState<string>("");
  useEffect(() => {
    console.log("demoText", demoText);
  }, [demoText]);

  return (
    <TextInput
      value={demoText}
      onChange={(event) => setDemoText(event.currentTarget.value)}
    />
  );
};

export default DemoTextInput;
