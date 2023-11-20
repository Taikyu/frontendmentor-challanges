import React from "react";

import success from "../../assets/images/icon-thank-you.svg";

const Success = () => {
  return (
    <div className="fixed left-[10vw] bg-white h-80 w-4/5 rounded-lg flex flex-col justify-center items-center text-center cursor-default sm:left-0 sm:relative sm:p-0 sm:w-full ">
      <img src={success} alt="+" />
      <strong className="text-marineBlue my-6 text-xl sm:text-3xl  ">
        Thank you!
      </strong>
      <p className="text-coolGray text-sm mx-2">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default Success;
