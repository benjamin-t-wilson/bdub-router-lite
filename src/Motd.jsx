import React from "react";

const Motd = (props) => {
  return (
    <>
      <h1>Motd</h1>
      <p>{props?.message?.value}</p>
      <a href="/">home</a>
    </>
  );
};

export default Motd;
