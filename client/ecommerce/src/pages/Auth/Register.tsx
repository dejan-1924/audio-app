import React from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import classes from "./Auth.module.css";
import axios from "axios";
import { useNavigate } from "react-router";

const customStyles = {
  control: (base, state) => ({
    ...base,
    background: "transparent",
    padding: "0.2rem",
    // match with the menu
    borderRadius: state.isFocused ? "3px 3px 0 0" : 0,
    fontSize: "0.9rem",
    border: state.isFocused ? "2px solid grey" : "1px solid grey",

    boxShadow: state.isFocused ? null : null,
  }),
};

const days = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
  { value: "10", label: "10" },
  { value: "11", label: "11" },
  { value: "12", label: "12" },
  { value: "13", label: "13" },
  { value: "14", label: "14" },
  { value: "15", label: "15" },
  { value: "16", label: "16" },
  { value: "17", label: "17" },
  { value: "18", label: "18" },
  { value: "19", label: "19" },
  { value: "20", label: "20" },
  { value: "21", label: "21" },
  { value: "22", label: "22" },
  { value: "23", label: "23" },
  { value: "24", label: "24" },
  { value: "25", label: "25" },
  { value: "26", label: "26" },
  { value: "27", label: "27" },
  { value: "28", label: "28" },
  { value: "29", label: "29" },
  { value: "30", label: "30" },
  { value: "31", label: "31" },
];

const months = [
  { value: "January", label: "January" },
  { value: "February", label: "February" },
  { value: "March", label: "March" },
  { value: "April", label: "April" },
  { value: "May", label: "May" },
  { value: "June", label: "June" },
  { value: "Juny", label: "Juny" },
  { value: "August", label: "August" },
  { value: "September", label: "September" },
  { value: "October", label: "October" },
  { value: "November", label: "November" },
  { value: "December", label: "December" },
];

let years: { label: number; value: number }[] = [];

for (let i = 2023; i > 1940; i--) {
  years.push({ value: i, label: i });
}

let countries = [
  { value: "Serbia", label: "Serbia" },
  { value: "USA", label: "USA" },
  { value: "Germany", label: "Germany" },
];
const Register = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      postalCode: "",
      street: "",
      streetNumber: "",
      country: "",
      city: "",
      telephone: "",
      day: {},
      month: {},
      year: {},
    },
  });

  const onSubmit = async (values: any) => {
    console.log(values);
    try {
      const result = await axios.post("http://localhost:3001/auth/register", {
        username: values.email,
        password: values.password,
        first_name: values.firstName,
        last_name: values.lastName,
        address: {
          postal_code: values.postalCode,
          street_name: values.street,
          street_number: values.streetNumber,
          country: values.country.value,
          city: values.city,
        },
        phone: values.telephone,
      });
      console.log(result.data);
      alert("SUCCES!");
      navigate("/login");
    } catch (err: any) {
      alert("ERROR!");
    }
  };

  return (
    <div className={classes.register}>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.loginForm}>
        <h3 className={classes.title}>I am a new customer</h3>
        <input
          className={classes.input}
          placeholder="Firstname"
          {...register("firstName", {
            required: "Required",
            maxLength: 30,
            minLength: 1,
          })}
        />
        {errors.firstName && errors.firstName.type === "maxLength" && (
          <span>Firstname must be shorter than 30 characters.</span>
        )}
        {errors.firstName && errors.firstName.type === "minLength" && (
          <span>Firstname must not be empty.</span>
        )}
        <input
          className={classes.input}
          placeholder="Lastname"
          {...register("lastName", {
            required: "Required",
            maxLength: 30,
            minLength: 1,
          })}
        />
        {errors.lastName && errors.lastName.type === "maxLength" && (
          <span>Lastname must be shorter than 30 characters.</span>
        )}
        {errors.lastName && errors.lastName.type === "minLength" && (
          <span>Lastname must not be empty.</span>
        )}
        <input
          className={classes.input}
          placeholder="Street"
          {...register("street", {
            required: "Required",
            maxLength: 30,
            minLength: 1,
          })}
        />
        {errors.street && errors.street.type === "maxLength" && (
          <span>Street must be shorter than 30 characters.</span>
        )}
        {errors.street && errors.street.type === "minLength" && (
          <span>Street must not be empty.</span>
        )}
        <input
          className={classes.input}
          placeholder="Street Number"
          {...register("streetNumber", {
            required: "Required",
            maxLength: 10,
            minLength: 1,
          })}
        />
        {errors.streetNumber && errors.streetNumber.type === "maxLength" && (
          <span>Street Number must be shorter than 10 characters.</span>
        )}
        {errors.streetNumber && errors.streetNumber.type === "minLength" && (
          <span>Street Number must not be empty.</span>
        )}
        <input
          className={classes.input}
          placeholder="Postal code"
          {...register("postalCode", {
            required: "Required",
            maxLength: 10,
            minLength: 1,
          })}
        />
        {errors.postalCode && errors.postalCode.type === "maxLength" && (
          <span>Postal code must be shorter than 10 characters.</span>
        )}
        {errors.postalCode && errors.postalCode.type === "minLength" && (
          <span>Postal code codeame must not be empty.</span>
        )}
        <input
          className={classes.input}
          placeholder="City"
          {...register("city", {
            required: "Required",
            maxLength: 30,
            minLength: 1,
          })}
        />
        {errors.city && errors.city.type === "maxLength" && (
          <span>City must be shorter than 30 characters.</span>
        )}
        {errors.city && errors.city.type === "minLength" && (
          <span>City must not be empty.</span>
        )}

        <Controller
          name="country"
          control={control}
          render={({ field }) => (
            <Select
              styles={customStyles}
              {...field}
              placeholder="Country"
              options={countries}
            />
          )}
        />
        <div className={classes.birthDate}>
          <div className={classes.birthDatePart}>
            <Controller
              name="day"
              control={control}
              render={({ field }) => (
                <Select
                  styles={customStyles}
                  components={{
                    IndicatorSeparator: () => null,
                  }}
                  {...field}
                  placeholder="Country"
                  options={days}
                />
              )}
            />
          </div>
          <div className={classes.birthDatePart}>
            <Controller
              name="month"
              control={control}
              render={({ field }) => (
                <Select
                  styles={customStyles}
                  components={{
                    IndicatorSeparator: () => null,
                  }}
                  {...field}
                  options={months}
                />
              )}
            />
          </div>
          <div className={classes.birthDatePart}>
            <Controller
              name="year"
              control={control}
              render={({ field }) => (
                <Select
                  styles={customStyles}
                  components={{
                    IndicatorSeparator: () => null,
                  }}
                  {...field}
                  placeholder="Year"
                  options={years}
                />
              )}
            />
          </div>
        </div>

        <input
          className={classes.input}
          placeholder="Telephone"
          {...register("telephone", {
            required: "Required",
            maxLength: 30,
            minLength: 1,
          })}
        />
        {errors.telephone && errors.telephone.type === "maxLength" && (
          <span>Telephone must be shorter than 30 characters.</span>
        )}
        {errors.telephone && errors.telephone.type === "minLength" && (
          <span>Telephone must not be empty.</span>
        )}
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
        {errors.password && <span>{errors.password.message}.</span>}

        <button type="submit" className={classes.loginButton}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
