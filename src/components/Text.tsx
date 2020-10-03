import React from 'react';
import styled from 'styled-components';

interface TextProps {
  text: string;
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

const TextWrapper = styled.div<{ color: string }>`
  color: ${({ color }) => color};
`;
