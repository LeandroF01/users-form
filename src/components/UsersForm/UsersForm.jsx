import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./styleForm.css";

const defaultValue = {
  first_name: "",
  last_name: "",
  password: "",
  birthday: "",
};
export const UsersForm = ({
  updateInfo,
  handleCloseForm,
  updateUsersForm,
  setUpdateInfo,
  createUsersForm,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (updateInfo) {
      reset(updateInfo);
    }
  }, [updateInfo]);

  const submit = (data) => {
    if (updateInfo) {
      updateUsersForm(data);
      setUpdateInfo();
    } else {
      createUsersForm(data);
    }
    reset(defaultValue);
    handleCloseForm();
  };

  const errFirstNameRequired = errors.first_name?.type === "required" && (
    <div className="form__errors">First name is required</div>
  );

  const errFirstNamePattern = errors.first_name?.type === "pattern" && (
    <div className="form__errors">Not symbols allowed</div>
  );

  const errFirstNameMaxLength = errors.first_name?.type === "maxLength" && (
    <div className="form__errors">Max 20 caracters</div>
  );

  const errLastNameRequired = errors.last_name?.type === "required" && (
    <div className="form__errors">Last name is required</div>
  );

  const errLastNamePattern = errors.last_name?.type === "pattern" && (
    <div className="form__errors">Not symbols allowed</div>
  );

  const errLastNameMaxLength = errors.last_name?.type === "maxLength" && (
    <div className="form__errors">Max 20 caracters</div>
  );

  const errEmailRequired = errors.email?.type === "required" && (
    <div className="form__errors">Email is required</div>
  );

  const errEmailPattern = errors.email?.type === "pattern" && (
    <div className="form__errors">Must contain example@email.com</div>
  );

  const errPasswordRequired = errors.password?.type === "required" && (
    <div className="form__errors">Password is required</div>
  );

  const errPasswordMinLength = errors.password?.type === "minLength" && (
    <div className="form__errors">Minimum 8 characters</div>
  );

  const errBirthdayRequired = errors.birthday?.type === "required" && (
    <div className="form__errors">Birthday is required</div>
  );

  return (
    <form onSubmit={handleSubmit(submit)} className="form">
      <div className="form__close" onClick={handleCloseForm}></div>
      <h2 className="form__title">
        {updateInfo ? "Update User Information" : "Create New User"}
      </h2>
      <ul>
        {/* First Name */}
        <li>
          <label htmlFor="first_name">First Name</label>
          <input
            {...register("first_name", {
              required: true,
              maxLength: 30,
              pattern: /^[A-Za-z-/ /]+$/,
            })}
            type="text"
            id="first_name"
          />
          {errFirstNameRequired}
          {errFirstNameMaxLength}
          {errFirstNamePattern}
        </li>

        {/* Last Name */}

        <li>
          <label htmlFor="last_name">Last Name</label>
          <input
            {...register("last_name", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z-/ /]+$/,
            })}
            type="text"
            id="last_name"
          />
          {errLastNameRequired}
          {errLastNamePattern}
          {errLastNameMaxLength}
        </li>

        {/* Email */}

        <li>
          <label htmlFor="email">Email</label>
          <input
            {...register("email", {
              required: true,
              pattern: /[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]/,
            })}
            type="text"
            id="email"
          />
          {errEmailRequired}
          {errEmailPattern}
        </li>

        {/* Password */}

        <li>
          <label htmlFor="password">Password</label>
          <input
            {...register("password", { required: true, minLength: 8 })}
            type="password"
            id="password"
          />
          {errPasswordMinLength}
          {errPasswordRequired}
        </li>

        {/* Birthday */}

        <li>
          <label htmlFor="birthday">Birthday</label>
          <input
            {...register("birthday", { required: true })}
            type="date"
            id="birthday"
          />
          {errBirthdayRequired}
        </li>
      </ul>
      <button className="form__btn">{updateInfo ? "Update" : "Create"}</button>
    </form>
  );
};
