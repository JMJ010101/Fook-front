import styled from "styled-components";
import ReactQuill from "react-quill";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 900px;
  height: 1100px;
  padding: 20px;
  margin-bottom: 100px;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  align-items: center;
`;

export const Title = styled.h2`
  margin: 0;
`;

export const NewPostButton = styled.button`
  border: none;
  background-color: transparent;
  color: black;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: #5d9c59;
  }
`;

export const PostContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  height: 900px;
  margin-top: 20px;
  justify-content: left;
  padding: 10px;
`;

export const Post = styled.div`
  margin-right: 30px;
  width: 250px;
  height: 380px;
  margin-bottom: 70px;
`;

export const PostImage = styled.img`
  width: 100%;
  height: 260px;
  border: 1px solid #dbdbdb;
`;

export const PostContent = styled.div`
  border: 1px solid #dbdbdb;
  padding: 10px;
  height: 40%;
`;

export const PostTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  height: 18%;
`;

export const PostDescription = styled.p`
  width: 100%;
  margin: 0;
  margin-top: 3px;
  height: 60%;
  font-size: 14px;
  white-space: nowrap; /* 텍스트가 넘칠 경우 줄바꿈 방지 */
  overflow: hidden; /* 넘친 텍스트 숨김 */
  text-overflow: ellipsis;
  img {
    width: 0px;
    height: 0px;
  }
`;

export const DateLike = styled.div`
  height: 22%;
  width: 100%;
  display: flex;
`;

export const PostDate = styled.p`
  margin: 0;
  margin-top: 12px;
  width: 85%;
  height: 17px;
  font-size: 12px;
  color: #8e8e8e;
`;

export const LikeButton = styled.div`
  width: 15%;
  height: 100%;
  right: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  .material-icons {
    font-size: 24px;
    color: #ff4c4c;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const PageBox = styled.div`
  width: 100%;
  height: 50px;
`;

export const StyledReactQuill = styled(ReactQuill)`
  .ql-toolbar {
    border: none;
    padding: 8px;
    background-color: #f5f5f5;
    font-size: 14px;
    font-family: "Noto Sans KR", sans-serif;
    border-radius: 5px 5px 0 0;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  }

  .ql-container {
    border: none;
    font-size: 16px;
    font-family: "Noto Sans KR", sans-serif;
  }

  .ql-editor {
    min-height: 300px;
    line-height: 1.6;
  }

  .ql-snow .ql-picker-label {
    color: #000;
  }

  .ql-snow .ql-picker-options {
    padding: 8px;
    font-size: 14px;
    border-radius: 5px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  }

  .ql-snow .ql-picker-item {
    padding: 5px;
    cursor: pointer;
  }

  .ql-snow .ql-picker-item:hover {
    background-color: #f5f5f5;
  }

  .ql-snow .ql-picker-item.ql-selected {
    background-color: #0077c6;
    color: #fff;
  }

  .ql-snow .ql-action {
    color: #000;
  }

  .ql-snow .ql-picker.ql-expanded .ql-picker-label {
    color: #0077c6;
  }

  .ql-snow .ql-picker.ql-expanded .ql-picker-item {
    color: #000;
  }

  .ql-snow .ql-picker.ql-expanded .ql-picker-item:hover,
  .ql-snow .ql-picker.ql-expanded .ql-picker-item.ql-selected {
    background-color: #f5f5f5;
  }

  .ql-toolbar .ql-formats + .ql-formats,
  .ql-toolbar .ql-snow + .ql-snow {
    margin-left: 8px;
  }

  .ql-snow.ql-toolbar:after {
    clear: both;
    content: "";
    display: table;
  }
`;
