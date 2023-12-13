const FooBar = (props) => {
  return (
    <>
      <h1>Foobar</h1>
      <p>foo: {props?.state?.foo}</p>
      <a href="/">home</a>
    </>
  );
};

export default FooBar;
