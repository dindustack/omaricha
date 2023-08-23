"use client";

import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  colored?: boolean;
  icon?: IconType;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  colored,
  disabled,
  outline,
  small,
  icon: Icon,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        w-full
        ${outline ? "bg-white" : "bg-black"}
        ${outline ? "border-black" : "border-none"}
        ${outline ? "text-black" : "text-white"}
        ${colored && "bg-primary !text-black"}
        ${small ? "py-1" : "py-3"}
        ${small ? "text-sm" : "text-md"}
        ${small ? "font-light" : "font-semibold"}
        ${small ? "border-[1px]" : "border-2"}
    `}
    >
      {Icon && (
        <Icon
          size={24}
          className="
            absolute
            left-4
            top-3  
          "
        />
      )}
      {label}
    </button>
  );
};
