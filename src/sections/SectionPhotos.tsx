import React, { useState } from 'react';
import 'react-photoswipe/lib/photoswipe.css';
import { PhotoSwipe } from 'react-photoswipe';

import _YY_1183_1x1 from 'src/assets/imgs/photos/_YY_1183_1x1.jpg';
import _YY_1353_1x1 from 'src/assets/imgs/photos/_YY_1362_1x1.jpg';
import _YY_1535_1x1 from 'src/assets/imgs/photos/_YY_1535_1x1.jpg';
import _YY_1700_1x1 from 'src/assets/imgs/photos/_YY_1700_1x1.jpg';
import _YY_1779_1x1 from 'src/assets/imgs/photos/_YY_1779_1x1.jpg';
import _YY_1870_1x1 from 'src/assets/imgs/photos/_YY_1870_1x1.jpg';
import _YY_1183 from 'src/assets/imgs/photos/_YY_1183.jpg';
import _YY_1353 from 'src/assets/imgs/photos/_YY_1362.jpg';
import _YY_1535 from 'src/assets/imgs/photos/_YY_1535.jpg';
import _YY_1700 from 'src/assets/imgs/photos/_YY_1700.jpg';
import _YY_1779 from 'src/assets/imgs/photos/_YY_1779.jpg';
import _YY_1870 from 'src/assets/imgs/photos/_YY_1870.jpg';
import _YY_1566 from 'src/assets/imgs/photos/_YY_1566.jpg';
import _YY_2167 from 'src/assets/imgs/photos/_YY_2167.jpg';
import styled from 'styled-components';
import { computedValueWithKeyframe } from 'src/lib/helper';
import { Title } from 'src/components/Title';

export function SectionPhotos({ scrollTop }: { scrollTop: number }) {
  const [isGalleryOpened, setIsGalleryOpened] = useState<boolean>(false);
  const [galleryOption, setGalleryOption] = useState<any>({
    closeOnScroll: false,
  });
  const photos_1x1 = [_YY_1183_1x1, _YY_1353_1x1, _YY_1535_1x1, _YY_1700_1x1, _YY_1779_1x1, _YY_1870_1x1];

  let photos = [
    {
      src: _YY_1183,
      w: 5040,
      h: 3360,
    },
    {
      src: _YY_1353,
      w: 5040,
      h: 3360,
    },
    {
      src: _YY_1535,
      w: 5040,
      h: 3360,
    },
    {
      src: _YY_1700,
      w: 5040,
      h: 3360,
    },
    {
      src: _YY_1779,
      w: 3360,
      h: 5040,
    },
    {
      src: _YY_1870,
      w: 4962,
      h: 3308,
    },
    {
      src: _YY_1566,
      w: 3109,
      h: 4993,
    },
    {
      src: _YY_2167,
      w: 4975,
      h: 3317,
    },
  ];

  function showGallery(index: number = 0) {
    setGalleryOption((prevState: any) => ({ ...prevState, index }));
    setIsGalleryOpened(true);
  }

  return (
    <PhotosWrapper>
      <Title text={'우리들의 사진'} />
      <PhotosGrid>
        <img
          src={photos_1x1[0]}
          className={'boxShadow'}
          style={{
            transform: `translate3d(0, ${computedValueWithKeyframe(
              scrollTop,
              0,
              2500,
              { 0: 10, 100: 60 },
              'easeInOutQuad'
            )}px, 0)`,
          }}
          onClick={() => {
            showGallery(0);
          }}
          alt={'이미지 1'}
        />
        <img
          src={photos_1x1[1]}
          className={'boxShadow'}
          style={{
            transform: `translate3d(-6%, -${computedValueWithKeyframe(
              scrollTop,
              0,
              2500,
              { 0: 10, 100: 80 },
              'easeInOutQuad'
            )}px, 0)`,
          }}
          onClick={() => {
            showGallery(1);
          }}
          alt={'이미지 2'}
        />
        <img
          src={photos_1x1[2]}
          className={'boxShadow'}
          style={{
            transform: `translate3d(0, ${computedValueWithKeyframe(
              scrollTop,
              0,
              2500,
              { 0: 30, 100: 80 },
              'easeInOutQuad'
            )}px, 0)`,
          }}
          onClick={() => {
            showGallery(2);
          }}
          alt={'이미지 3'}
        />
        <img
          src={photos_1x1[3]}
          className={'boxShadow'}
          style={{
            transform: `translate3d(-6%, -${computedValueWithKeyframe(
              scrollTop,
              0,
              2500,
              { 0: 10, 100: 70 },
              'easeInOutQuad'
            )}px, 0)`,
          }}
          onClick={() => {
            showGallery(3);
          }}
          alt={'이미지 4'}
        />
        <img
          src={photos_1x1[4]}
          className={'boxShadow'}
          style={{
            transform: `translate3d(0, ${computedValueWithKeyframe(
              scrollTop,
              0,
              2500,
              { 0: 10, 100: 60 },
              'easeInOutQuad'
            )}px, 0)`,
          }}
          onClick={() => {
            showGallery(4);
          }}
          alt={'이미지 5'}
        />
        <img
          src={photos_1x1[5]}
          className={'boxShadow'}
          style={{
            transform: `translate3d(-6%, -${computedValueWithKeyframe(
              scrollTop,
              0,
              2500,
              { 0: 0, 100: 80 },
              'easeInOutQuad'
            )}px, 0)`,
          }}
          onClick={() => {
            showGallery(5);
          }}
          alt={'이미지 6'}
        />
      </PhotosGrid>
      <BtnMore
        onClick={() => {
          showGallery(6);
        }}>
        사진 더 보기
      </BtnMore>
      <PhotoSwipe
        isOpen={isGalleryOpened}
        items={photos}
        options={galleryOption}
        onClose={() => {
          setIsGalleryOpened(false);
        }}
      />
    </PhotosWrapper>
  );
}

const PhotosWrapper = styled.section`
  padding: 90px 0;
`;
const PhotosGrid = styled.section`
  padding: 105px 20px 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 80px 0;
  justify-content: space-between;
  margin: 30px auto 100px;
  box-sizing: border-box;

  & img {
    width: 106%;
  }
`;

const BtnMore = styled.button`
  width: 80%;
  margin-top: 40px;
  padding: 15px 35px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  font-size: 1rem;
  background: none;
  outline: none;
`;
