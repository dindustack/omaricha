import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { TbCurrencyNaira } from "react-icons/tb";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

export const FormInput: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  formatPrice,
  register,
  required,
  errors,
}) => {
  return (
    <div className="w-full relative">
      {formatPrice && (
        <TbCurrencyNaira
          size={24}
          className="text-neutral-700 absolute top-5 left-2"
        />
      )}
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=""
        type={type}
        className={`
          peer
          w-full
          p-4
          pt-6
          font-light
          bg-white
          border-2
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          ${formatPrice ? "pl-9" : "pl-4"}
          ${errors[id] ? "border-red-500" : "border-neutral-300"}
          ${errors[id] ? "focus:border-red-500" : "focus:border-black"}
        `}
      />
      <label
        className={`
          absolute
          text-md
          duration-150
          transform
          -translate-y-3
          top-5
          bg-white
          text-zinc-400
          z-10
          origin-[0]
          ${formatPrice ? "left-9" : "left-4"}
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-80
          peer-focus:top-1
          peer-focus:font-bold
          peer-focus:text-black
          peer-focus:-translate-y-4
          ${errors[id] && "text-red-500"}
        `}
      >
        {label}
      </label>
    </div>
  );
};
