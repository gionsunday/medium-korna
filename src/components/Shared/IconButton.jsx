import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing(0.5)};
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export default function IconButton({ children, onClick, ariaLabel }) {
  return (
    <Btn onClick={onClick} aria-label={ariaLabel}>
      {children}
    </Btn>
  );
}
