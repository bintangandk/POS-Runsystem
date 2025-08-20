type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
};

export default function PrimaryButton({
  children,
  onClick,
  type = "button",
  className = "",
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full bg-gray-400 text-white py-2 rounded-lg hover:bg-blue-400 ${className}`}
    >
      {children}
    </button>
  );
}
