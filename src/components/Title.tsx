import React from 'react';
import styled from 'styled-components';

export function Title({ text }: { text: string }) {
  return <TitleWrapper>{text}</TitleWrapper>;
}

const TitleWrapper = styled.div`
  font-size: 1.1em;
  padding: 20px 0 15px 0;
`;
