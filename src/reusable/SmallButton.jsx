import styled, { css } from "styled-components";
import { Button as BaseButton } from "./Button";

export const SmallButton = styled(BaseButton)`
  width: 10vw;
  height: 6vh;
  font-size: 18px;
  background: rgb(225, 225, 225);
  color: black;

  &:hover {
    background: rgb(190, 190, 190);
  }

  ${(props) =>
    props.$variant === "danger" &&
    css`
      background: rgba(200, 50, 50, 1) !important;
      color: white !important;
      &:hover {
        background: rgba(170, 30, 30, 1);
      }
    `}
`;
