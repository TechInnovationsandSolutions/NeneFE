import { useMemo } from "react";

const Button = ({
  text = "",
  variant = "black",
  size = "small",
  customClassName = "",
}) => {
  const className = useMemo(() => {
    const baseClassName = "py-[0.8em] px-[2.62em]";
    const buttonWidth = size === "small" ? "w-fit" : "w-full";
    const buttonVariant = `bg-${variant}`;
    const buttonTextColor = variant === "black" ? "text-white" : "text-black";

    const className = `${baseClassName} ${buttonWidth} ${buttonVariant} ${buttonTextColor}`;

    return className;
  }, [size, variant]);

  return <button className={`${className} ${customClassName}`}>{text}</button>;
};

export default Button;

/*
The Button Component takes in the following props:->

Button Text as "text",
Button Background Color Variant as "variant" - Which is either white/black,
Button Size as "size" - Which is either small/big,
Custom Class property for any other styles you wish to add.

Example -         <Button text="Register" variant="black" size="small" />
*/
