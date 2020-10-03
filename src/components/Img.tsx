import React from 'react';
import styled from 'styled-components';

interface ImgProps {
  src: string;
  alt?: string;
  width?: string | number;
  style?: any;
}

export function Img({ src, alt = '', width = 'auto', style }: ImgProps) {
  return (
    <ImgWrapper width={width} {...{ style }}>
      <img src={src} alt={alt} />
    </ImgWrapper>
  );
}

const ImgWrapper = styled.div<{ width: string | number }>`
  width: ${({ width }) => width};
  font-size: 0;
`;
