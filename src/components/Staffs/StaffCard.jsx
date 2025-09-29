// PostCard.jsx
import React from "react";
import styled from "styled-components";

import { ItemActions } from "./ItemActions"

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  gap: 15px;
  cursor: pointer;
`;

const Content = styled.div`
  width: 100%;
`;

const Meta = styled.div`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 5px;
  span {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
  }
    div {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

const Title = styled.h3`
  font-size: .8rem;
  font-weight: 700;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.text};
`;

const Subtitle = styled.p`
  font-size: .8rem;
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 10px;
`;



const ImageWrapper = styled.div`
  width: 180px;
  min-width: 180px;
  height: 120px;
  border-radius: 4px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProfileImage = styled.img`
  width: 25px;  
  height: 25px;
  border-radius: 10%;
  object-fit: cover;
  margin-right: 5px;
`;

export function StaffCard({ post }) {
  return (
    <Card>
      <Content>
        <Meta>
          <div>
            {
              post.profileImage && (
                <ProfileImage src={post.profileImage} alt={post.author} />
              )
            }

            {
              post.category ? (
                <> In <span> {post.category}</span>  by {post.author}</>
              ) : (
                <>  {post.author} </>
              )
            }
          </div>

        </Meta>

        {
          post.title && (
            <>
              <Title>{post.title}</Title>
              <Subtitle>{post.subtitle}</Subtitle></>

          )
        }


        <ItemActions post={post} />

      </Content>

      {
        post.image && (
          <ImageWrapper>
            <img src={post.image} alt={post.title} />
          </ImageWrapper>
        )
      }

    </Card>
  );
}
