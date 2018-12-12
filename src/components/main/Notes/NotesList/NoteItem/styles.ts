import styled from "styled-components";
import { Button, ListGroupItem, Badge } from "reactstrap";

export const STGroupItem = styled(ListGroupItem)`
  &&& {
    padding-left: 0;
    padding-right: 0;
  }
  /* display: flex;
  justify-content: space-between; */
`;

export const STListText = styled.span`
  display: flex;
  flex: column nowrap;
  justify-content: center;
  align-items: center;
`;

export const STBadge = styled(Badge)`
  margin-left: 8px;

  &&& {
    background-color: #27ccc0;
    font-size: 13px;
  }
`;

export const STButtonText = styled.span`
  padding: 5px 13px;
`;
