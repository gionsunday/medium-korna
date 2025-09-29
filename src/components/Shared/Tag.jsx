import React from 'react';
import styled from 'styled-components';

const Pill = styled.span`
  display: inline-block;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 12px;
  background: ${({ theme }) => theme.colors.border};
`;

export default function Tag({ children }) {
  return <Pill>{children}</Pill>;
}
