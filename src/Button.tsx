import React from "react";

const Button = ({
  text,
  onToggle,
}: {
  text: string;
  onToggle: () => void
}) => {
  return <button onClick={onToggle}>{text}</button>;
};

export default Button;
