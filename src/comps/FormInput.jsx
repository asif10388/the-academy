const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="relative">
      {label && (
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          {label}
        </label>
      )}
      <input className="w-full bg-opacity-50 rounded border border-gray-300 outline-none text-gray-700 py-1 px-3 leading-8" {...otherProps} />
    </div>
  );
};

export default FormInput;
