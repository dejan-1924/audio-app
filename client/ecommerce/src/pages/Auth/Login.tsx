import React from "react";
import Select from "react-select";
import { useForm } from "react-hook-form";
import classes from "./Auth.module.css";
import Register from "./Register";
import axios from "axios";
import { ConnectionStates } from "mongoose";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (values: any) => {
    try {
      const result = await axios.post("http://localhost:3001/auth/login", {
        username: values.email,
        password: values.password,
      });
      console.log(result.data);
      navigate("/shop");
    } catch (err: any) {
      alert("ERROR!");
    }
  };

  return (
    <div className={classes.authPage}>
      <div className={classes.login}>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.loginForm}>
          <h3 className={classes.title}>I am already a customer</h3>
          <input
            className={classes.input}
            placeholder="E-mail address"
            type="email"
            {...register("email", {
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
          />
          {errors.email && errors.email.message}

          <input
            className={classes.input}
            placeholder="Password"
            type="password"
            {...register("password", {
              required: "Required",
            })}
          />
          {errors.password && errors.password.message}

          <button type="submit" className={classes.loginButton}>
            Login
          </button>
        </form>
      </div>
      <Register></Register>
    </div>
  );
};

export default Login;
