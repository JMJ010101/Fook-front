import styled from "styled-components";

export const SideMenus = styled.div`
  border: none;
  position: absolute;
  top: 135px;
  left: 10;
  border-radius: 5px;
  box-shadow: 2px 1px 1.7px 1px gray;
  height: 68%;
  width: 200px;
  padding: 1rem 1rem 1rem 0;
`;

export const InfoButton = styled.li`
  color: gray;
  border: none;
  background-color: #c7e8ca;
  margin-bottom: 10px;
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;
  padding: 10px;
  height: 20px;
  overflow: hidden;
  width: 20px;
  transition-property: width;
  transition-duration: 0.1s;
  transition-timing-function: linear;
  cursor: pointer;
  &:hover {
    background-color: #5d9c59;
    color: white;
    height: 20px;
    width: 180px;
  }
`;
export const InfoBox = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  border: none;
  width: 800px;
  height: 70%;

  box-shadow: 1px 2px 2px 2px gray;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #c7e8ca;
  color: gray;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #5d9c59;
    color: white;
  }
`;
