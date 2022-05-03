import SignUp from "../comps/SignUp";
import SignIn from "../comps/SignIn";
import { useState } from "react";

const Authentication = () => {
  const [authStage, setAuthStage] = useState("signup");

  const toggleAuthStage = () => setAuthStage((value) => (value === "signup" ? "singin" : "signup"));

  return <>{authStage === "signup" ? <SignUp onClick={toggleAuthStage} /> : <SignIn onClick={toggleAuthStage} />}</>;
};

export default Authentication;
