import styled from "styled-components";
import { CardContent, Typography } from "../../../components";

export const LabelStyled = styled(Typography)`
  font-weight: 500;
  font-size: 1.5rem;
`;

export const ValueStyled = styled(Typography)`
  font-weight: 400;
  font-size: 2.5rem;
`;

export const CardContentStyled = styled(CardContent)`
  border-left: 8px solid ${({ color }) => color || "#5d78ff"};
`;

export const CardPanelContentStyled = styled(CardContent)`
  display: flex;
  justify-content: space-between;
  padding: 25px;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const ItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 200px;
`;

export const DivStyled = styled.div`
  @media (max-width: 480px) {
    margin: auto;
    padding-top: 15px;
  }
`;