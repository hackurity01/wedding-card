import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface TextProps {
  text: ReactNode;
  color?: string;
  style?: any;
  className?: string;
}

export function Text({ text, color = '#fff', style = {}, className }: TextProps) {
  return (
    <TextWrapper color={color} style={style} {...{ className }}>
      {text}
    </TextWrapper>
  );
}

const TextWrapper = styled.span<{ color: string }>`
  color: ${({ color }) => color};
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.8);
`;
