import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function PasswordInput({ onChange }) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-full space-y-2">
      <label htmlFor="password">Password</label>
      <div className="relative w-full">
        <input
          name="password"
          type={showPassword ? "text" : "password"}
          className="w-full rounded-md p-2 text-gray-800 focus:outline-none focus:ring-4 focus:ring-primary-500"
          onChange={(e) => onChange(e.target.value)}
        />

        <button
          className="absolute right-2 top-[10px]"
          onClick={(e) => {
            e.preventDefault();
            setShowPassword((show) => !show);
          }}
        >
          {showPassword ? (
            <EyeSlashIcon className="h-5 text-black" />
          ) : (
            <EyeIcon className="h-5 text-black" />
          )}
        </button>
      </div>
    </div>
  );
}

export default PasswordInput;
