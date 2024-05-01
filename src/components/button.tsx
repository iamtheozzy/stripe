export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...args }: ButtonProps) => {
  return (
    <button
      className="px-4 py-1 bg-blue-500 text-white border-solid border-blue-600 border-2 rounded-lg"
      {...args}
    >
      {children}
    </button>
  );
};

export { Button };
