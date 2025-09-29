import React from "react";
import { FaSearch, FaEdit, FaBell } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";

const Wrapper = styled.header`
  padding: ${({ theme }) => theme.spacing(2)};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0px 20px;
  margin: auto;

  @media (max-width: 768px) {
    padding: 0px 10px;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  h2 {
    margin: 0;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 250px;
  background-color: ${({ theme }) => theme.colors.gray}10;
  border-radius: 25px;
  margin-left: 20px;
  padding: ${({ theme }) => theme.spacing(0.5)} ${({ theme }) => theme.spacing(1.5)};

  input {
    width: 100%;
    padding: ${({ theme }) => theme.spacing(1.5)};
    border: none;
    background: none;
    outline: none;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    display: none; /* hide the full search bar */
  }
`;

const SearchIconMobile = styled(FaSearch)`
  display: none;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 1.2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Icon = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const GiHamburgerStyled = styled(GiHamburgerMenu)`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 1.5rem;
  cursor: pointer;
`;

const Settings = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 25px;

  div {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
  }

  div p {
    color: ${({ theme }) => theme.colors.gray};
    font-weight: 500;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    .write,
    .bell {
      display: none;
    }
  }
`;

const ChangeTheme = styled.div`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
  height: 30px;
  width: 30px;
  border-radius: 50%;
`;

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <Left>
          <GiHamburgerStyled />
          <h2>Medium</h2>
          <SearchBar>
            <FaSearch style={{ color: "#757575", fontSize: "1.2rem" }} />
            <input type="text" placeholder="Search..." />
          </SearchBar>
        </Left>

        <Settings>
          <div className="write">
            <Icon as={FaEdit} />
            <p>Write</p>
          </div>
          <Icon as={FaBell} className="bell" />

          <SearchIconMobile />

          <ChangeTheme />
        </Settings>
      </Container>
    </Wrapper>
  );
}
