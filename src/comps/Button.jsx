const BUTTON_TYPE_CLASSES = {
  base: "bg-green-500 hover:bg-green-600 text-white ",
  google: "border-0 bg-white hover:bg-gray-100 text-gray-600",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button className={`flex mx-auto border-0 py-2 px-8 rounded text-lg ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
