import React, { useState } from "react";
import InputField from "../../components/InputField/inputField";
import { Formik, useFormik } from "formik";
import { ImagePath } from "../../utils/imageUtils";
import { STRINGS, BUTTONS } from "../../constant/CommonString";
import { loginDataFields } from "./loginData";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";
import { LoginValidationSchema } from "./validationSchema";
const Login = () => {
  const navigate = useNavigate();

  //** state management */
  const [showPassIcon, setShowPassIcon] = useState(false);
  const [showLogin, setshowLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [errorStates, setErrorStates] = useState({
    isValidEmail: false,
    isValidPassword: false,
    incorrectCred: false,
  });
  const showErrorMessage = (item) => {
    if (item.id === 1 && errorStates.isValidEmail) {
      return item.errorMessage;
    } else if (item.id === 2 && errorStates.isValidPassword) {
      return item.errorMessage;
    }
  };
  const onLoginPress = (values, targer = "submit") => {};
  const handleInputChange = (event, item) => {
    if (item.id === 1) {
      setLoginData({
        ...loginData,
        email: event.target.value,
      });
      setErrorStates({
        ...errorStates,
        isValidEmail:
          event.target.value !== "" ? false : errorStates.isValidEmail,
      });
    } else {
      setLoginData({
        ...loginData,
        password: event.target.value,
      });
      setErrorStates({
        ...errorStates,
        isValidPassword:
          event.target.value !== "" ? false : errorStates.isValidPassword,
      });
    }
  };
  // const formik = useFormik({
  //   initialValues: {
  //     email: "",
  //     password: "",
  //   },
  //   validationSchema: LoginValidationSchema,
  //   onSubmit: async (values) => {
  //     onLoginPress(values);
  //   },
  // });

  return (
    <div className="">
      <img
        className="md:absolute lg:absolute xl:absolute lg:top-6 sm:top-6 top-2  lg:left-6 sm:left-6 left-2 p-2 lg:p-0 sm:p-0"
        src={ImagePath("Images/bm.png")}
        alt="Terolo logo"
      />
      <div className="absolute md:absolute lg:absolute xl:absolute inset-0 items-center lg:flex lg:flex-col sm:flex sm:flex-col lg:mt-0 sm:mt-20 ">
        <div className="w-full mt-14 md:w-96 lg:w-96 xl:w-96 items-center justify-center flex flex-col px-8 rounded-xl  shadow-none md:shadow-[0px_0px_10px__rgba(94,108,132,0.1)] lg:shadow-[0px_0px_10px__rgba(94,108,132,0.1)] xl:shadow-[0px_0px_10px__rgba(94,108,132,0.1)]  relative">
          <div className="w-full md:text-start lg:text-center xl:text-left mb-5 mt-0 md:my-6 lg:my-6 xl:my-6">
            <text className="text-xl font-semibold text-center text-primary">
              {STRINGS.SIGN_IN}
            </text>
          </div>
          {/* google and linkedIn */}
          <div className="py-2 space-x-6 w-full pt-0">
            <div className="flex px-3 h-10 pr-6 justify-center space-x-3 items-center border transition-colors border-bordercolor rounded-md   cursor-pointer hover:text-primary hover:border-subHover">
              <img
                src={ImagePath("Images/google.png")}
                alt="googleLogo"
                className="w-6 h-6"
              />
              <div className="font-semibold text-sm">Google</div>
            </div>
          </div>
          <div className="text-main w-full text-center my-5">
            <p className="w-full border-b-2 border-bordercolor text-sm text-center mt-2.5 mb-5 mx-0 leading-0">
              <span className="text-subHover text-primary font-semibold py-0 px-2.5  bg-white">
                {STRINGS.SIGNIN_WITH_EMAIL}
              </span>
            </p>
          </div>
          <div className="w-full flex-grow">
            <form>
              {loginDataFields.map((item) => {
                return (
                  <div className="relative lg:mt-1 sm:mt-1 lg:mb-9 sm:mb-9 mt-10">       
                    <InputField
                      id="floating_outlined"
                      key={item.id}
                      className="pl-1"
                      type={item.type}
                      maxLength={item.maxLength}
                      padReqd={item.type === "password" ? true : false}
                      label={item.label}
                      showPassIcon={showPassIcon}
                      inputStyle={
                        "h-10 block px-2.5 pb-2.5 pt-4 w-full text-textcolor text-sm font-normal bg-transparent rounded-md border border-bordercolor appearance-none dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                      }
                      labelStyle={
                        "absolute  text-textcolor text-sm font-semibold  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                      }
                      name={item.name}
                      value={loginData.email}
                      placeholder={item.placeholder}
                      inputBoxStyle={""}
                      onChange={(event) => {
                        handleInputChange(event, item);
                        item.type === "password" &&
                          event.target.value.length > 0 &&
                          setShowPassIcon(true);
                        item.type === "password" &&
                          event.target.value.length === 0 &&
                          setShowPassIcon(false);
                      }}
                      errorMessage={showErrorMessage(item)}
                    />
                  </div>
                );
              })}
              <div className="relative lg:mb-10 sm:mb-10 mb-5"></div>

              <div class="flex justify-between my-6">
                <div class="form-check">
                  <input
                    class="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat py-5 bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    class="form-check-label inline-block text-sm text-textcolor pt-0.5 font-semibold"
                    for="flexCheckDefault"
                  >
                    {STRINGS.REMEMBER_ME}
                  </label>
                </div>

                <div className="forgot-txt pt-1.5 text-primary">
                  <p
                    className="cursor-pointer text-xs font-semibold"
                    onClick={() => navigate("/forgot-password")}
                  >
                    Forgot password?
                  </p>
                </div>
              </div>
              <Button
                loading={loading}
                buttonClass={"mx-0"}
                buttonStyle={
                  "w-full h-10 items-center justify-center font-semibold font-sm rounded-md bg-primary text-white"
                }
                buttonText={BUTTONS.SIGN_IN}
                onClick={onLoginPress}
                // onClick={(e) => handleSubmit(e)}
              />
            </form>
          </div>
        </div>
        <div className="text-xs b-0 mt-3 py-5 px-5">
          This site is protected by reCAPTCHA and the Google
          <span className="text-blue-500"> Privacy Policy</span> and{" "}
          <span className="text-blue-500">Terms of Service </span> apply.
        </div>
      </div>
    </div>
  );
};
export default Login;
