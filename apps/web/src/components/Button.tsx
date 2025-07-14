interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
};

export const Button = ({ onClick, disabled, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="px-6 py-2 bg-black text-white rounded-xl hover:bg-gray-800 disabled:opacity-50"
    >
      {children}
    </button>
  );
};