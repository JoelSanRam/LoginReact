import React, { useState } from "react";
import SignupForm from "./SignupForm";
import Success from "./Success";

const Form = () => {
  const [formIsSubmited, setFormIsSubmited] = useState(false);
  const submitForm = () => {
    setFormIsSubmited(true);
  };
  return (
    <div>
      {!formIsSubmited ? <SignupForm submitForm={submitForm} /> : <Success />}
    </div>
  );
};

export default Form;
