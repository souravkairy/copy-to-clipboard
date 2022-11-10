import React from "react";
import clsx from "clsx";

const Button = ({
  variant,
  icon,
  children,
  className = "",
  iconClass = "",
  textColor = "text-primary",
  ...props
}) => {
  return variant === "iconButton" ? (
    <button
      className={`p-2 flex content-center ${className} ${textColor}`}
      {...props}
    >
      <span className={`material-icons ${iconClass}`}>{icon}</span>
    </button>
  ) : (
    <button className={clsx("flex content-center", className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
