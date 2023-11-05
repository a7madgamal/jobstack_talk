import React, { FC } from "react";

interface ButtonComponentProps {
  label: string;
}

const ButtonComponent: FC<ButtonComponentProps> = (props) => {
  return <div>{props.label}</div>;
};
