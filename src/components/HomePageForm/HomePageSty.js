import styled from "styled-components";

export const Home = styled.div`
  position: relative;
  top: 0;
  bottom: 0;
  left: -30px;
  right: 0;
  margin: auto;
`;

// export const Boards = styled.div`
//   display: flex;
//   position: relative;
//   flex-direction: column;
//   margin-bottom: 5px;
//   height: 20vh;
//   padding: 5%;
//   margin-left: 32.8%;
// `;

export const Boards = styled.div`
  width: 500px;
  height: 300px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: none;
  background-repeat: no-repeat;
  /* background-size: 100% 245px; */
  background-color: transparent;
`;

export const MainRecipe = styled.div`
  border: none;
  box-shadow: 1px 5px 10px 5px lightgray;
  border-radius: 5px;
  padding: 30px;
  width: 500px;
  height: 400px;
  text-align: center;
`;

export const Notice = styled.div`
  border: none;
  border-radius: 5px;
  width: 500px;
  height: 400px;
  text-align: left;
  padding: 30px;
  box-shadow: 1px 5px 15px 5px lightgray;
`;

export const Btn = styled.div`
  display: flex;
`;

export const Button = styled.button`
  border-radius: 5px;
  background-color: transparent;
  border: none;
  color: gray;
  cursor: pointer;
  transition: all 0.2s;
`;

export const RecipeIs = styled.div`
  display: flex;
`;

export const Brand = styled.img`
  height: 50px;
`;
