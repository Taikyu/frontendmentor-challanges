import React from "react";

const Card = ({ className, children }) => {
  let classes;
  if (className) {
    classes = className + " sm:rounded-xl border-0 sm:border-1";
  } else {
    classes = "sm:rounded-xl border-0 sm:border-1";
  }
  return <div className={classes}> {children}</div>;
};

export default Card;
