import React, { FC, useState, useEffect } from "react";
import { TextInput, Button, Group } from "@mantine/core";

interface IDemoTextInputExternalProps {
  text: string;
  setText: (value: any) => void;
}

const DemoTextInputExternal: FC<IDemoTextInputExternalProps> = ({
  text,
  setText,
}) => {
  return (
    <TextInput
      value={text}
      onChange={(event) => setText(event.currentTarget.value)}
    />
  );
};

export default DemoTextInputExternal;
