"use client";

import { ReactNode, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type Props = {
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  icon?: ReactNode; 
};

export default function InputField({
  label,
  type,
  placeholder,
  required,
  icon,
}: Props) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div>
      <label className="block text-sm font-medium mb-1 text-black">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <div className="relative">
        {/* Icon kiri */}
        {icon && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            {icon}
          </span>
        )}

        <input
          type={inputType}
          placeholder={placeholder}
          required={required}
          className={`w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-gray-800 placeholder-gray-400 placeholder:italic px-3 py-2 ${
            icon ? "pl-10" : ""
          } ${isPassword ? "pr-10" : ""}`}
        />

        {isPassword && (
          <span
            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-gray-400"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
          </span>
        )}
      </div>
    </div>
  );
}
