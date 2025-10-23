interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={props.id} className="mb-2 text-sm font-semibold">
          {label}
        </label>
      )}
      <input
        className="w-full px-4 py-2 bg-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
        {...props}
      />
    </div>
  );
};
