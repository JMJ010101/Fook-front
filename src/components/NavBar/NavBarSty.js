import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: transparent;
  position: relative;
  z-index: 1;
  /* width: 80%; */
  margin: auto;
`;

export const Brand = styled.img`
  height: 10vh;
  cursor: pointer;
`;

export const Search = styled.div`
  position: relative;
  height: 34px;
  margin-top: 30px;
  margin-left: 100px;
  input {
    width: 300px;
    height: inherit;
    padding: 4px 10px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    border-radius: 5px;
    /* outline: none; */
    background-color: #fff;
    color: #777;
    font-size: 12px;
    transition: width 0.4s;
  }
  .material-icons {
    height: 24px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 5px;
    margin: auto;
    &:hover {
      color: #5d9c59;
      cursor: pointer;
    }
  }
`;

export const Button = styled.button`
  width: 100px;
  background-color: transparent;
  margin-top: 30px;
  border: none;
  border-radius: 1px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: #5d9c59;
    transition: 0.3s;
  }
`;

export const Click = styled.ul`
  position: absolute;
  border: none;
  background-color: white;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 2px 2px gray;
`;
export const UserListForm = styled.div`
  position: absolute;
  color: #333;
  width: 88px;

  &:not(:last-of-type) {
    border-bottom: 1px solid black;
  }
  &:last-of-type {
    color: black;
  }
`;

export const UserList = styled.li`
  padding: 10px 0px;
  list-style: none;
  background-color: #c7e8ca;
  color: gray;
  cursor: pointer;
  &:hover {
    background-color: #5d9c59;
    color: white;
  }
`;
