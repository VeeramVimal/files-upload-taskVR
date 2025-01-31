import * as Yup from "yup";
export const LoginValidationSchema = Yup.object({
    email: Yup.string("Enter your email").required("Email is required").email('Enter a valid email'),
    password: Yup.string("Enter your password").required("Password is required")
})