import styled from "styled-components";
import ListGroupItem from "reactstrap/lib/ListGroupItem";

export const STGroupItem = styled(ListGroupItem)`
  word-wrap: break-word;
  color: #666666;
  font-family: "Open Sans";
  font-size: 12px;
  &&& {
    padding: 10px 0px 20px;
  }
`;
