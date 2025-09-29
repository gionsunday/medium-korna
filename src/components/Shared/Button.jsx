import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  padding: ${({ theme }) => theme.spacing(1)};
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: ${({ variant, theme }) =>
    variant === 'primary' ? theme.colors.secondary : 'transparent'};
  color: ${({ variant }) => (variant === 'primary' ? '#fff' : 'inherit')};
`;

export default function Button({ children, variant = 'default', ...rest }) {
  return (
    <Btn variant={variant} {...rest}>
      {children}
    </Btn>
  );
}
