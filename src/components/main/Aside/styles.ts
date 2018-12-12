import styled from "styled-components";
import { Jumbotron } from "reactstrap";

export const STJumbotron = styled(Jumbotron)`
  &&& {
    background-color: #2b2f3e;
    height: 100vh;
    border-radius: 0;
  }
`;

export const STHeading = styled.h1`
  font-size: 39px;
  color: #fff;
  text-transform: uppercase;
`;

export const STDescription = styled.p`
  font-size: 18px;
  color: #808080;
`;
