import * as Yup from "yup";

const validationScheme = () =>
  Yup.object().shape({
    name: Yup.string()
      .min(2, "Name at least 2 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string()
      .min(10, "Message at least 10 characters")
      .required("Message is required"),
  });

export default validationScheme; 
