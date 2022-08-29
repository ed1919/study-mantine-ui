import { useState, useEffect } from "react";
import InviteModal from "../components/work-react-hook-form/InviteModal";
import InfoForm from "../components/work-react-hook-form/InfoForm";

interface IReactHookFormPageProps {}

const ReactHookFormPage: React.FC<IReactHookFormPageProps> = ({}) => {
  return (
    <div className="reactHookFormPage">
      {/* <InviteModal /> */}
      <InfoForm />
    </div>
  );
};

export default ReactHookFormPage;
