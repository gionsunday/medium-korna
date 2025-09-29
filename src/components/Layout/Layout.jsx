import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const Container = styled.div`
 width:100%;
 display:flex;
gap:40px;
  padding-left:100px;
 @media (max-width: 768px) {
    padding-left: 0px;
    width:100%; 
  }

 main {
  width:65%;
    @media (max-width: 768px) {
    padding: 20px;
    width:100% !important; 
  }
 }


`;

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Container>
        <main>{children}</main>
        <div>
          <Sidebar />
        </div>
      </Container>
    </>
  );
}
