import "./button.scss";

export const Button = ({
  btnText = "Submit",
  onClick = () => {
    console.log("this button is useless");
  },
}) => {
  const handleClick = (event) => {
    event.preventDefault();
    onClick();
  };
  return (
    <button onClick={handleClick} className="primary-button">
      {btnText}
    </button>
  );
};
