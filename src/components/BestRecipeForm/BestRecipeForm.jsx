import React from "react";
import {
  Container,
  DateLike,
  Header,
  LikeButton,
  NewPostButton,
  Post,
  PostContainer,
  PostContent,
  PostDate,
  PostDescription,
  PostImage,
  PostTitle,
  Title,
} from "./BestRecipeSty";
import { Link } from "react-router-dom";
import { useState } from "react";

const BestRecipeForm = () => {
  const [like, setLike] = useState(0);

  const ClickLike = () => {
    setLike(!like);
  };

  return (
    <Container>
      <Header>
        <Title>게시글 목록</Title>
        <Link to="/best/newpost">
          <NewPostButton>새 게시글</NewPostButton>
        </Link>
      </Header>
      <PostContainer>
        <Post>
          <PostImage src="https://picsum.photos/200" />
          <PostContent>
            <PostTitle>게시글 제목</PostTitle>
            <PostDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque consequat sapien eu eros varius sagittis.
            </PostDescription>
            <DateLike>
              <PostDate>2023.04.23</PostDate>
              <LikeButton>
                <span
                  onClick={() => {
                    ClickLike();
                    setLike(like + 1);
                  }}
                  class="material-icons"
                >
                  favorite_border
                </span>
                <p
                  style={{
                    fontSize: "3px",
                    textAlign: "center",
                    marginRight: "9px",
                  }}
                >
                  {like}
                </p>
              </LikeButton>
            </DateLike>
          </PostContent>
        </Post>
        <Post>
          <PostImage src="https://picsum.photos/200" />
          <PostContent>
            <PostTitle>게시글 제목</PostTitle>
            <PostDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque consequat sapien eu eros varius sagittis.
            </PostDescription>
            <PostDate>2023.04.23</PostDate>
          </PostContent>
        </Post>
        <Post>
          <PostImage src="https://picsum.photos/200" />
          <PostContent>
            <PostTitle>게시글 제목</PostTitle>
            <PostDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque consequat sapien eu eros varius sagittis.
            </PostDescription>
            <PostDate>2023.04.23</PostDate>
          </PostContent>
        </Post>
        <Post>
          <PostImage src="https://picsum.photos/200" />
          <PostContent>
            <PostTitle>게시글 제목</PostTitle>
            <PostDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque consequat sapien eu eros varius sagittis.
            </PostDescription>
            <PostDate>2023.04.23</PostDate>
          </PostContent>
        </Post>
        <Post>
          <PostImage src="https://picsum.photos/200" />
          <PostContent>
            <PostTitle>게시글 제목</PostTitle>
            <PostDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque consequat sapien eu eros varius sagittis.
            </PostDescription>
            <PostDate>2023.04.23</PostDate>
          </PostContent>
        </Post>
      </PostContainer>
    </Container>
  );
};

export default BestRecipeForm;
