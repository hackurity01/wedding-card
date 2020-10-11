import React from 'react';
import styled from 'styled-components';

interface PictureProps {
  jpg: string;
  webp: string;
  alt?: string;
  style?: any;
  className?: string;
  onClick?: () => void;
}

export function Picture({ jpg, webp, alt = '', style = {}, className = '', onClick }: PictureProps) {
  return (
    <div style={style} className={className}>
      <picture {...(onClick ? { onClick } : null)}>
        <source srcSet={webp} type="image/webp" />
        <ImgBlock src={jpg} alt={alt} />
      </picture>
    </div>
  );
}

const ImgBlock = styled.img`
  display: block;
`;
