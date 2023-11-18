import React from "react";

const Card = ({ className, children }) => {
  let classes;
  if (className) {
    classes = className + " rounded-xl border";
  } else {
    classes = "rounded-xl border";
  }
  return <div className={classes}> {children}</div>;
};

export default Card;
