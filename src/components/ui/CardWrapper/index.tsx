import * as React from "react";
import { STCard } from "./styles";

interface IProps {
  children: React.ReactNode;
}

const CardWrapper = (props: IProps) => {
  return <STCard>{props.children}</STCard>;
};

export default CardWrapper;
