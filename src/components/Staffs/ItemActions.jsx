// PostCard.jsx
import React from "react";
import styled from "styled-components";
import { FaRegCommentDots, FaRegBookmark, FaCommentDots, FaComment } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineStar, AiFillStar, AiFillMinusCircle } from "react-icons/ai";
import { PiHandsClappingFill, PiHandsClappingBold, PiHandsClappingDuotone } from "react-icons/pi";
import { BsDashCircle, } from "react-icons/bs";
import { formatDate } from "../../utils/formatDate";

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.gray};
  gap: 15px;

  div {
    display: flex;
    align-items: center;
    gap:30px;
    
  }
    span{
    display:flex;
    gap:4px;
    }

`;

const Icon = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const StarStyled = styled(AiFillStar)`
color: ${({ theme }) => theme.colors.golden}
`
const StyledFaComment = styled(FaComment)`
transform:rotate(270deg)
`

export function ItemActions({ post }) {
  return (
    <Actions>
      <div >
        <span> <Icon as={StarStyled} /> {formatDate(post.date)}</span>

        {
          post.likes && (
            <>

              <span> <Icon as={PiHandsClappingDuotone} /> {post.likes} </span>
              <span><Icon as={StyledFaComment} /> {post.comments} </span>
            </>
          )
        }

      </div>

      <div>

        {
          post.likes && (
            <>

              <Icon as={BsDashCircle} />
              <Icon as={FaRegBookmark} />
              <Icon as={FiMoreHorizontal} />
            </>
          )
        }


      </div>



    </Actions>
  );
}
