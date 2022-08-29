import { useState, useEffect } from "react";

import DemoModalBasic from "../components/DemoModalBasic";
import DemoModalWithLabel from "../components/DemoModalWithLabel";
import DemoModalContextApply from "../components/DemoModalContextApply";
import DemoModalCustom from "../components/DemoModalCustom";
import RegisterEmailModal from "../components/RegisterEmailModal";
import RegisterEmailModalV2 from "../components/RegisterEmailModalV2";
import RegisterEmailModalV3 from "../components/RegisterEmailModalV3";
import DemoTextInput from "../components/Study/TextInput/DemoTextInput";
import DemoTextInputExternal from "../components/Study/TextInput/DemoTextInputExternal";

// Work
import CustomerRegisterModal from "../components/work/CustomerRegisterModal";
import OpenModalBtn from "../components/work/OpenModalBtn";

const ModalPage = () => {
  const [text, setText] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const onSubmit = () => {
    console.log("email", email);
  };

  const onSubmitEmail = (email: string) => {
    alert(`Email: ${email}`);
  };

  useEffect(() => {
    console.log("external email", email);
  }, [email]);

  return (
    <div>
      <h1>Modal Page</h1>
      <DemoModalBasic />
      <DemoModalWithLabel />
      <DemoModalContextApply />
      <DemoModalCustom />
      <RegisterEmailModal
        email={email}
        setEmail={setEmail}
        onSubmit={onSubmit}
      />
      <RegisterEmailModalV2 onSubmit={onSubmit} />
      <RegisterEmailModalV3 onSubmit={onSubmit} />
      <DemoTextInputExternal text={text} setText={setText} />
      <DemoTextInput />
      <div>-------------------------WORK------------------------------</div>
      <CustomerRegisterModal onSubmit={onSubmitEmail} />
      <OpenModalBtn />
    </div>
  );
};

export default ModalPage;
