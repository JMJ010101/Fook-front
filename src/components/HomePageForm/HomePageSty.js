import styled from "styled-components";

export const Home = styled.div`
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

export const Boards = styled.div`
  position: relative;
  width: 500px;
  height: 1300px;
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

export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

export const MainRecipe = styled.div`
  position: absolute;
  border: none;
  box-shadow: 1px 5px 10px 5px lightgray;
  border-radius: 5px;
  padding: 30px;
  width: 500px;
  height: 430px;
  text-align: center;
`;

export const TodayRecipe = styled.div`
  position: absolute;
  border: none;
  box-shadow: 1px 5px 10px 5px lightgray;
  border-radius: 5px;
  margin-top: 440px;
  padding: 30px;
  width: 500px;
  height: 430px;
  text-align: center;
  img {
    width: 440px;
    height: 300px;
  }
`;

export const Notice = styled.div`
  position: absolute;
  border: none;
  border-radius: 5px;
  margin-top: 880px;
  width: 500px;
  height: max-content;
  text-align: left;
  padding: 30px;
  box-shadow: 1px 5px 15px 5px lightgray;
`;

export const HomeNotice = styled.div`
  display: flex;
  p {
    margin-right: 10px;
  }
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
