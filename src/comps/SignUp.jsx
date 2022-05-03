import { useState } from "react";

import { signInWithGooglePopup, createUserDocumentFromAuth, createAuthUserWithEmailAndPassword } from "../utils/firebase";

import FormInput from "./FormInput";
import Button from "./Button";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = ({ onClick }) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="container px-5 py-12 mx-auto">
      <div className="md:w-1/3 py-12 mx-auto bg-gray-200 rounded flex flex-col items-center">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Sign Up</h1>
        <div className="p-2 w-full">
          <Button buttonType="google" onClick={signInWithGoogle}>
            Sign In With Google
          </Button>
        </div>
        <div className="p-2 w-2/3">
          <FormInput label="Name" type="text" required onChange={handleChange} name="displayName" value={displayName} />
        </div>
        <div className="p-2 w-2/3">
          <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
        </div>
        <div className="p-2 w-2/3">
          <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />
        </div>
        <div className="p-2 w-2/3">
          <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />
        </div>
        <div className="p-2 w-full">
          <Button buttonType="base" onClick={handleSubmit}>
            Sign Up
          </Button>
        </div>
        <button type="button" onClick={onClick}>
          Already have an account? Log In
        </button>
      </div>
    </div>
  );
};

export default SignUp;
