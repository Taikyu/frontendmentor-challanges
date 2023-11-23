import React, { useRef, useState, useContext } from "react";

import { userContext } from "../../store/form-context";

const classes =
  " cursor-pointer py-2 px-4 text-sm font-semiBold  text-marineBlue border rounded-lg focus:outline-none focus:border-1 focus:border-purplishBlue sm:text-base ";
const errorClasses =
  " cursor-pointer py-2 px-4 text-sm font-semiBold  text-marineBlue border border-strawberryRed rounded-lg focus:outline-none focus:border-1 focus:border-purplishBlue sm:text-base ";

const InfoInput = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const { navigateNext, updateUserInfo, user } = useContext(userContext);

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  function handleUpdateInfo() {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;

    if (name === "") {
      setNameError(true);
      return;
    }
    if (email === "" || !email.includes("@") || !email.includes(".")) {
      setEmailError(true);
      return;
    }
    if (phone === "") {
      setPhoneError(true);
      return;
    }
    updateUserInfo({
      name,
      email,
      phone,
    });

    navigateNext();
  }

  return (
    <>
      <div className="fixed left-[10vw] bg-white w-4/5 rounded-lg flex flex-col cursor-default text-sm p-4 sm:text-base sm:left-0 sm:relative sm:p-0 sm:w-full ">
        <div className="sm:pt-4">
          <h1 className="text-xl line font-[900] text-marineBlue sm:text-3xl">
            Personal info
          </h1>
          <p className="text-coolGray text-sm sm:py-2">
            Please provide your name, email address, and phone number.
          </p>
        </div>
        <form className="flex flex-col mt-4 gap-1">
          <div className="flex flex-col ">
            <label className=" flex justify-between text-marineBlue text-sm font-semiBold">
              <p>Name</p>
              {nameError && (
                <small className="text-strawberryRed ">
                  This field is required
                </small>
              )}
            </label>
            <input
              ref={nameRef}
              className={nameError ? errorClasses : classes}
              type="text"
              placeholder="e.g. Stephen King"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className=" flex justify-between text-marineBlue text-sm font-semiBold">
              <p>Email Address</p>
              {emailError && (
                <small className="text-strawberryRed ">
                  Enter a valid e-mail
                </small>
              )}
            </label>
            <input
              ref={emailRef}
              className={emailError ? errorClasses : classes}
              type="email"
              placeholder="e.g. stephenking@lorem.com"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className=" flex justify-between text-marineBlue text-sm font-semiBold">
              <p>Phone Number</p>
              {phoneError && (
                <small className="text-strawberryRed ">
                  This field is required
                </small>
              )}
            </label>
            <input
              ref={phoneRef}
              className={phoneError ? errorClasses : classes}
              type="tel"
              placeholder="e.g. +1 234 567 890"
            />
          </div>
        </form>
      </div>
      <div className="fixed left-0 bottom-0 bg-white px-4 py-2 w-full flex justify-end font-semiBold text-base sm:absolute sm:bottom-4 sm:p-0 sm:text-sm ">
        <button
          onClick={handleUpdateInfo}
          className="text-magnolia px-4 py-2 rounded-lg bg-marineBlue hover:bg-purplishBlue cursor-pointer "
        >
          Next Step
        </button>
      </div>
    </>
  );
};

export default InfoInput;
