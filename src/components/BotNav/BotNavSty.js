import styled from "styled-components";

export const Brand = styled.img`
  height: 50px;
  cursor: pointer;
  z-index: 3;
  position: fixed;
  top: 85%;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

export const BnContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 300px;
  display: flex;
  align-items: center;
`;
export const LButtonBox = styled.div`
  height: 90px;
  width: 50%;
  border: none;
  border-top-right-radius: 50px;
  box-shadow: 1px 10px 10px 5px gray;
  z-index: 1;
`;
export const RButtonBox = styled.div`
  height: 90px;
  width: 50%;
  border: none;
  border-top-left-radius: 50px;
  box-shadow: -1px 10px 10px 5px gray;
  z-index: 1;
`;
