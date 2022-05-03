import { useState } from "react";

import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../utils/firebase";

import FormInput from "./FormInput";
import Button from "./Button";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignUp = ({ onClick }) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async () => {
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {}
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="container px-5 py-12 mx-auto">
      <div className="md:w-1/3 py-12 mx-auto bg-gray-200 rounded flex flex-col items-center">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Sign In</h1>
        <div className="p-2 w-full">
          <Button buttonType="google" onClick={signInWithGoogle}>
            Sign In With Google
          </Button>
        </div>
        <div className="p-2 w-2/3">
          <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
        </div>
        <div className="p-2 w-2/3">
          <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />
        </div>
        <div className="p-2 w-full">
          <Button buttonType="base" onClick={handleSubmit}>
            Sign In
          </Button>
        </div>
        <button type="button" onClick={onClick}>
          Don't have an account? Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
