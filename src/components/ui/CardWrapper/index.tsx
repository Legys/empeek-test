import * as React from "react";
import { STCard, STCardTitle } from "./styles";
import PerfectScrollbar from "react-perfect-scrollbar";
interface IProps {
  title: string;
  children: React.ReactNode;
}

const CardWrapper = (props: IProps) => {
  return (
    <PerfectScrollbar>
      <STCard>
        <STCardTitle>{props.title}</STCardTitle>
        {props.children}
      </STCard>
    </PerfectScrollbar>
  );
};

export default CardWrapper;
