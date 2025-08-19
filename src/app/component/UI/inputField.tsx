import { ReactNode } from "react";

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
  return (
    <div>
      <label className="block text-sm font-medium mb-1 text-black">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-400 text-gray-150 placeholder-gray-400"
      />
    </div>
  );
}
