import React from "react";

const Home = (props) => {
  return (
    <>
      <h1>Home</h1>
      <a href="/test/2">test 2</a>
      <a href="/test/extra">extra</a>
      <button onClick={() => props.navigateTo("/test/4")}>test 4</button>
    </>
  );
};

export default Home;
