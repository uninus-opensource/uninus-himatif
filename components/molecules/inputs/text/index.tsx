import { FC, ReactElement } from "react";
import clsx from "clsx";
import { TTextFieldProps } from "./types";

export const TextField: FC<TTextFieldProps> = (props): ReactElement => {
  const inputSize = clsx({
    "p-2 placeholder:text-sm text-sm": props.size === "sm",
    "p-4 placeholder:text-md text-md": props.size === "md",
    "p-6 placeholder:text-lg text-lg": props.size === "lg",
  });

  const inputStatus = clsx(
    "border rounded-lg focus:ring-none focus:outline-none appearance-none",
    {
      "bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500":
        props.status === "none" || !props.status,
      "bg-green-50 border-green-300 text-green-900 placeholder:text-green-500":
        props.status === "success",
      "bg-red-50 border-red-500 text-red-900 placeholder:text-red-500":
        props.status === "error",
      "bg-orange-50 border-orange-500 text-orange-900 placeholder:text-orange-500":
        props.status === "warning",
    }
  );

  const inputStyle = [inputStatus, inputSize].join(" ");

  const labelStyle = clsx({
    "text-xl mb-2": props.size === "sm",
    "text-3xl mb-2": props.size === "md",
    "text-5xl mb-2": props.size === "lg",
  });

  const messageStyle = clsx({
    "text-green-500 mt-1 text-sm": props.status === "success",
    "text-red-500 mt-1 text-sm": props.status === "error",
    "text-orange-500 mt-1 text-sm": props.status === "warning",
    "text-slate-500 mt-1 text-sm": props.status === "none",
  });

  return (
    <section className="flex flex-col">
      <label htmlFor={props.label} className={labelStyle}>
        {props.label}
      </label>
      <input
        type="text"
        className={inputStyle}
        id={props.label}
        placeholder={props.placeholder}
      />
      <span className={messageStyle}>{props.message}</span>
    </section>
  );
};
