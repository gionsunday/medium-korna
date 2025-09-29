// PostCard.jsx
import React from "react";
import styled from "styled-components";
import { FaRegCommentDots, FaRegBookmark } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
import { PiHandWaving } from "react-icons/pi";
import { FeedItemActions } from "./FeedItemActions"

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  gap: 20px;
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
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.text};
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 10px;

   @media (max-width: 768px) {
    font-size: .8rem;
  }

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
    @media (max-width: 768px) {
 width: 100px;
  min-width: 100px; 
  }
`;

const ProfileImage = styled.img`
  width: 25px;  
  height: 25px;
  border-radius: 10%;
  object-fit: cover;
  margin-right: 5px;

   @media (max-width: 768px) {
    width: 20px;  
  height: 20px;
  }
`;

export function PostCard({ post }) {
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


        <FeedItemActions post={post} />

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
