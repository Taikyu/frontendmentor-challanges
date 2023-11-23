import React, { useContext } from "react";

import { userContext } from "../../store/form-context";
let duration, classes, toggleClasses, monthClasses, yearClasses;

const PaymentPlan = () => {
  const { user, updatePaymentPlan, updateRate } = useContext(userContext);

  if (user.rate) {
    duration = "/mo";
    toggleClasses = "absolute w-3 h-3 bg-magnolia rounded-full left-1";
    monthClasses = "text-marineBlue text-sm font-semiBold";
    yearClasses = "text-coolGray text-sm font-semiBold";
  } else {
    duration = "/yr";
    toggleClasses = "absolute w-3 h-3 bg-magnolia rounded-full right-1 ";
    monthClasses = "text-coolGray text-sm font-semiBold";
    yearClasses = "text-marineBlue text-sm font-semiBold";
  }

  return (
    <div className="fixed left-[10vw] bg-white w-4/5 rounded-lg flex flex-col cursor-default text-sm p-4 sm:text-base sm:left-0 sm:relative sm:p-0 sm:w-full ">
      <div className="sm:pt-4">
        <h1 className="text-xl line font-[900] text-marineBlue sm:text-3xl ">
          Select your plan
        </h1>
        <p className="text-coolGray text-sm sm:py-2">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <div className="flex flex-col justify-between mt-4 gap-2 sm:flex-row ">
        {user.paymentPlans.map((plan) => {
          if (plan.status) {
            classes =
              "flex gap-4 rounded-md border p-3 border-coolGray border-purplishBlue bg-magnolia sm:flex-col sm:justify-between sm:w-28 sm:h-40 ";
          } else {
            classes =
              "flex gap-4 rounded-md border p-3 border-coolGray hover:border-purplishBlue hover:bg-magnolia sm:flex-col sm:justify-between sm:w-28 sm:h-40 ";
          }
          return (
            <div
              key={plan.id}
              className={classes}
              onClick={() => updatePaymentPlan(plan.id)}
            >
              <img src={plan.img} alt="arcade" className="w-10 h-10" />
              <div>
                <strong className="text-marineBlue">{plan.id}</strong>
                <p className="text-sm text-coolGray">
                  ${user.rate ? plan.amount : plan.amount * 10}
                  {duration}
                </p>
                {!user.rate && (
                  <p className="text-marineBlue text-xs">2 months free</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex p-2 justify-center items-center rounded-md bg-magnolia w-full h-10 mt-4 gap-1 sm:p-0 ">
        <p className={monthClasses}>Monthly</p>
        <div
          onClick={updateRate}
          className="flex relative items-center w-10 h-5 rounded-full bg-marineBlue mx-4 "
        >
          <div className={toggleClasses}></div>
        </div>
        <p className={yearClasses}>Yearly</p>
      </div>
    </div>
  );
};

export default PaymentPlan;
