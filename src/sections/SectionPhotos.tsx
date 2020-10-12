import React, { useState } from 'react';
import { PhotoSwipe } from 'react-photoswipe';
import 'react-photoswipe/lib/photoswipe.css';

import { computedValueWithKeyframe } from 'src/lib/helper';
import { Title } from 'src/components/Title';
import { Picture } from 'src/components/Picture';

import _YY_1183_1x1 from 'src/assets/imgs/photos/YY_1183_1x1.jpg';
import _YY_1183_1x1_webp from 'src/assets/imgs/photos/YY_1183_1x1.webp';
import _YY_1353_1x1 from 'src/assets/imgs/photos/YY_1362_1x1.jpg';
import _YY_1353_1x1_webp from 'src/assets/imgs/photos/YY_1362_1x1.webp';
import _YY_1535_1x1 from 'src/assets/imgs/photos/YY_1535_1x1.jpg';
import _YY_1535_1x1_webp from 'src/assets/imgs/photos/YY_1535_1x1.webp';
import _YY_1779_1x1 from 'src/assets/imgs/photos/YY_1779_1x1.jpg';
import _YY_1779_1x1_webp from 'src/assets/imgs/photos/YY_1779_1x1.webp';
import _YY_1870_1x1 from 'src/assets/imgs/photos/YY_1870_1x1.jpg';
import _YY_1870_1x1_webp from 'src/assets/imgs/photos/YY_1870_1x1.webp';
import _YY_1566_1x1 from 'src/assets/imgs/photos/YY_1566_1x1.jpg';
import _YY_1566_1x1_webp from 'src/assets/imgs/photos/YY_1566_1x1.webp';
import _YY_1183 from 'src/assets/imgs/photos/YY_1183.jpg';
import _YY_1353 from 'src/assets/imgs/photos/YY_1362.jpg';
import _YY_1535 from 'src/assets/imgs/photos/YY_1535.jpg';
import _YY_1779 from 'src/assets/imgs/photos/YY_1779.jpg';
import _YY_1870 from 'src/assets/imgs/photos/YY_1870.jpg';
import _YY_1566 from 'src/assets/imgs/photos/YY_1566.jpg';
import _YY_2167 from 'src/assets/imgs/photos/YY_2167.jpg';
import styled from 'styled-components';

export function SectionPhotos({ scrollTop }: { scrollTop: number }) {
  const [isGalleryOpened, setIsGalleryOpened] = useState<boolean>(false);
  const [galleryOption, setGalleryOption] = useState<any>({
    closeOnScroll: false,
    getThumbBoundsFn: () => {
      return { x: 0, y: window.innerHeight, w: window.innerWidth };
    },
  });
  const photos_1x1 = [_YY_1183_1x1, _YY_1353_1x1, _YY_1535_1x1, _YY_1566_1x1, _YY_1779_1x1, _YY_1870_1x1];
  const photos_1x1_webp = [
    _YY_1183_1x1_webp,
    _YY_1353_1x1_webp,
    _YY_1535_1x1_webp,
    _YY_1566_1x1_webp,
    _YY_1779_1x1_webp,
    _YY_1870_1x1_webp,
  ];

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
      src: _YY_1566,
      w: 3109,
      h: 4993,
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
        <Picture
          className={'boxShadow'}
          jpg={photos_1x1[0]}
          webp={photos_1x1_webp[0]}
          alt={'이미지 0'}
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
        />
        <Picture
          className={'boxShadow'}
          jpg={photos_1x1[1]}
          webp={photos_1x1_webp[1]}
          alt={'이미지 1'}
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
        />
        <Picture
          className={'boxShadow'}
          jpg={photos_1x1[2]}
          webp={photos_1x1_webp[2]}
          alt={'이미지 2'}
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
        />
        <Picture
          className={'boxShadow'}
          jpg={photos_1x1[3]}
          webp={photos_1x1_webp[3]}
          alt={'이미지 3'}
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
        />
        <Picture
          className={'boxShadow'}
          jpg={photos_1x1[4]}
          webp={photos_1x1_webp[4]}
          alt={'이미지 4'}
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
        />
        <Picture
          className={'boxShadow'}
          jpg={photos_1x1[5]}
          webp={photos_1x1_webp[5]}
          alt={'이미지 5'}
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
        />
      </PhotosGrid>
      <div style={{ color: '#666', fontSize: '0.78rem', paddingTop: '20px' }}>
        *사진을 클릭하시면 크게 볼 수 있어요!
      </div>
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
  max-width: 500px;
  margin: auto;
`;
const PhotosGrid = styled.div`
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
