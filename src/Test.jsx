import React from "react";

const Test = (props) => {
  return (
    <>
      <h1>Test id: {props.params.id}</h1>
      <a href="/">home</a>
    </>
  );
};

export default Test;
