import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface FormValues {
  firstName?: string;
  lastName?: string;
  address_1?: string;
  address_2?: string;
  address_3?: string;
  pin?: number;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export const SignupForm: React.FC<FormValues> = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        address_1: "",
        address_2: "",
        address_3: "",
        pin: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={Yup.object().shape({
        firstName: Yup.string()
          .required("First Name is required")
          .max(15, "Must be 15 charcter or less")
          .matches(/^[a-z]+$/, "Is not correct format"),
        lastName: Yup.string()
          .required("Last Name is required")
          .max(15, "Must be 15 charcter or less")
          .matches(/^[a-z]+$/, "Is not correct format"),
        address_1: Yup.string().required("Address is required"),
        address_2: Yup.string(),
        address_3: Yup.string(),
        pin: Yup.string()
          .required("Pin is required")
          .max(6, "Must be 6 digits")
          .min(6, "Must be 6 digits"),
        email: Yup.string()
          .email("Email is invalid")
          .required("Email is required"),
        password: Yup.string()
          .min(8, "Password must be at least  characters")
          .required("Password is required"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password")], "Passwords must match")
          .required("Confirm Password is required"),
      })}
      onSubmit={(fields) => {
        alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
      }}
      render={({ errors, touched }) => (
        <Form>
          <div>
            <label htmlFor="firstName">First Name</label>
            <Field
              name="firstName"
              type="text"
              className={
                errors.firstName && touched.firstName ? " is-invalid" : ""
              }
            />
            <ErrorMessage name="firstName" component="div" />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <Field
              name="lastName"
              type="text"
              className={
                errors.lastName && touched.lastName ? " is-invalid" : ""
              }
            />
            <ErrorMessage name="lastName" component="div" />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <Field
              name="address_1"
              type="text"
              className={
                errors.address_1 && touched.address_1 ? " is-invalid" : ""
              }
            />
            <ErrorMessage name="address_1" component="div" />

            <br />
            <Field
              name="address_2"
              type="text"
              className={
                errors.address_2 && touched.address_2 ? " is-invalid" : ""
              }
            />
            <ErrorMessage name="address_2" component="div" />

            <br />
            <Field
              name="address_3"
              type="text"
              className={
                errors.address_3 && touched.address_3 ? " is-invalid" : ""
              }
            />
            <ErrorMessage name="address_3" component="div" />
          </div>
          <div>
            <label htmlFor="pin">Pin</label>
            <Field
              name="pin"
              type="number"
              className={errors.pin && touched.pin ? " is-invalid" : ""}
            />
            <ErrorMessage name="pin" component="div" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field
              name="email"
              type="text"
              className={errors.email && touched.email ? " is-invalid" : ""}
            />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field
              name="password"
              type="password"
              className={
                errors.password && touched.password ? " is-invalid" : ""
              }
            />
            <ErrorMessage name="password" component="div" />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field
              name="confirmPassword"
              type="password"
              className={
                errors.confirmPassword && touched.confirmPassword
                  ? " is-invalid"
                  : ""
              }
            />
            <ErrorMessage name="confirmPassword" component="div" />
          </div>
          <div>
            <button type="submit">Register</button>
            <button type="reset">Reset</button>
          </div>
        </Form>
      )}
    />
  );
};
