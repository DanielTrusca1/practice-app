import styled from "styled-components";

export const Button = styled.button`
  width: 16vw;
  height: 7vh;
  margin-left: 2vw;
  margin-top: 2vh;
  background: rgba(150, 100, 200, 0.5);
  color: white;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  cursor:pointer;

  &:hover {
    background: rgba(150, 100, 200, 1);
  }
`;
