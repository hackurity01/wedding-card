import React, { useCallback, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Transition } from 'react-transition-group';

import mainImg from 'src/assets/imgs/main/main.jpg';
import mainImgWebp from 'src/assets/imgs/main/main.webp';

const duration = 500;
const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out, transform ${duration}ms ease-in-out`,
  opacity: 0,
};
const transitionStyles: any = {
  entering: { opacity: 1, transform: 'scale(1)' },
  entered: { opacity: 1, transform: 'scale(1)' },
  exiting: { opacity: 0, transform: 'scale(1.08)' },
  exited: { opacity: 0, transform: 'scale(1.08)' },
};

export const SectionCard = React.memo(({ winHeight }: { winHeight: number }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <SectionCardWrapper height={winHeight}>
      <OverflowHidden>
        <Transition in={isLoaded} timeout={duration}>
          {state => (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}>
              <CardWrapper height={winHeight}>
                <NameAndDate>
                  <Name>유동균</Name>
                  <Date>
                    <div>11</div>
                    <div>28</div>
                  </Date>
                  <Name>이한주</Name>
                </NameAndDate>
                <ImgCard>
                  <picture onLoad={handleLoad}>
                    <source srcSet={mainImgWebp} type="image/webp" />
                    <img src={mainImg} alt="웨딩 사진" />
                  </picture>
                </ImgCard>
                <Desc>
                  <div>2020년 11월 28일 토요일 오후 1시 30분</div>
                  <div>아산 모나무르 아레나홀</div>
                </Desc>
              </CardWrapper>
              <ScrollIndicator>
                <DownImgWrapper>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMjkgMTI5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjkgMTI5Ij4KICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Im00MC40LDEyMS4zYy0wLjgsMC44LTEuOCwxLjItMi45LDEuMnMtMi4xLTAuNC0yLjktMS4yYy0xLjYtMS42LTEuNi00LjIgMC01LjhsNTEtNTEtNTEtNTFjLTEuNi0xLjYtMS42LTQuMiAwLTUuOCAxLjYtMS42IDQuMi0xLjYgNS44LDBsNTMuOSw1My45YzEuNiwxLjYgMS42LDQuMiAwLDUuOGwtNTMuOSw1My45eiIvPgogICAgPC9nPgo8L3N2Zz4="
                    alt={'down'}
                  />
                </DownImgWrapper>
              </ScrollIndicator>
            </div>
          )}
        </Transition>
      </OverflowHidden>
      <GradientEnd />
    </SectionCardWrapper>
  );
});

const SectionCardWrapper = styled.div<{ height: number }>`
  text-align: left;
  background: #fff;
  height: ${({ height }) => height}px;
  position: relative;
  color: #333;
`;

const OverflowHidden = styled.div`
  overflow: hidden;
`;
const CardWrapper = styled.div<{ height: number }>`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 500px;
  min-height: ${({ height }) => height - 50}px;
  margin: auto;
  padding-bottom: 25px;
  box-sizing: border-box;
`;
const NameAndDate = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 25px 8px;
  box-sizing: border-box;
`;
const Name = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8em;
`;
const Date = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.1em;

  & div:first-child {
    border-bottom: 1px solid #333;
  }
  & div {
    padding: 5px;
  }
`;
const ImgCard = styled.div`
  padding: 5px 25px;

  & img {
    width: 100%;
  }
`;
const Desc = styled.div`
  font-size: 0.75em;
  line-height: 1.4rem;
  padding-top: 10px;

  & div {
    white-space: nowrap;
    text-align: center;
  }
`;
const ScrollIndicator = styled.div`
  position: relative;
  bottom: 10px;
  width: 100%;
  text-align: center;

  & div {
    font-size: 0.8em;
    padding-bottom: 5px;
  }

  & img {
    width: 25px;
    height: auto;
    transform: rotate(90deg);
    opacity: 0.7;
  }
`;
const DownAnimation = keyframes`
  0% {
    transform: translateY(-2px);
  }
  50% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(-2px);
  }
`;
const DownImgWrapper = styled.div`
  animation: ${DownAnimation} 1.5s ease infinite;
`;
const GradientEnd = styled.div`
  position: absolute;
  top: 100%;
  height: 400px;
  width: 100%;
  background-image: linear-gradient(rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
`;
