import React, { useState, useEffect } from "react";
import Validation from "./Validation";

const SignupForm = ({ submitForm }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    setDataIsCorrect(true);
  };

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      submitForm(true);
    }
  }, [errors]);

  const handleChangeInput = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  return (
    <div className="container">
      <div className="app_wrapper">
        <div>
          <h2 className="tittle">Create an acount</h2>
        </div>
        <form action="" className="form_wrapper">
          <div className="name">
            <label htmlFor="" className="label">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={values.name}
              className="input"
              onChange={handleChangeInput}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="email">
            <label htmlFor="" className="label">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={values.email}
              className="input"
              onChange={handleChangeInput}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="password">
            <label htmlFor="" className="label">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={values.password}
              className="input"
              onChange={handleChangeInput}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <button className="submit" onClick={handleFormSubmit}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
