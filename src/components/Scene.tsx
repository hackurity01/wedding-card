import React from 'react';
import styled from 'styled-components';

interface SceneProps {
  duration: string;
  className?: string;
  children: any;
}

export function Scene({ duration, className, children }: SceneProps) {
  return (
    <SceneWrapper {...{ className }} duration={duration}>
      {children}
    </SceneWrapper>
  );
}

const SceneWrapper = styled.div<{ duration: string }>`
  height: ${({ duration }) => duration};
  position: relative;
`;
