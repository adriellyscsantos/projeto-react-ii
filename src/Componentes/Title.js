const Title = (props) => {
  return (
    <div>
      <h1>{props.children}</h1>
      <h2>{props.texto}</h2>
    </div>
  );
};

export default Title;
