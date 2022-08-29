import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { TextField, Checkbox } from "@mui/material";
import InviteModal from "./InviteModal";
import CheckBoxRow from "./CheckboxRow";

interface IFormInputs {
  TextField: string;
  MyCheckbox: boolean;
  username: string;
  onlineMode: number;
}

const InfoForm = () => {
  const { handleSubmit, control, reset, setValue } = useForm<IFormInputs>();
  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="MyCheckbox"
        control={control}
        defaultValue={false}
        rules={{ required: true }}
        render={({ field }) => <Checkbox {...field} />}
      />
      <InviteModal setValue={setValue} />
      <CheckBoxRow setValue={setValue} />
      <input type="submit" />
    </form>
  );
};

export default InfoForm;
