function InputField({ type, onChange, label }) {
  return (
    <div className="space-y-2">
      <label htmlFor={label}>{label}</label>
      <div className="relative">
        <input
          name={label}
          type={type}
          className="w-full rounded-md p-2 text-gray-800 focus:outline-none focus:ring-4 focus:ring-primary-500"
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}

export default InputField;
