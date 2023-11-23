import React from "react";

function Attribution() {
  return (
    <strong className="hidden bg-white w-fit mx-auto rounded-b-lg pb-2 px-4 text-coolGray cursor-default  shadow-x-lg text-center sm:block">
      Challenge by {""}
      <a
        className="hover:text-marineBlue"
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        className="hover:text-marineBlue"
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
      >
        Taikyu
      </a>
      .
    </strong>
  );
}

export default Attribution;
