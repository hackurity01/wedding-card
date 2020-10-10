import React from 'react';

import IMG_6308 from 'src/assets/imgs/section2/IMG_6308.jpg';
import IMG_8220 from 'src/assets/imgs/section2/IMG_8220.jpg';
import IMG_8515 from 'src/assets/imgs/section2/IMG_8515.jpg';
import { Img } from 'src/components/Img';
import { Text } from 'src/components/Text';
import { computedValueWithKeyframe } from 'src/lib/helper';

export function Section2({ scrollTop }: { scrollTop: number }) {
  return (
    <section>
      <div style={{ height: '1100px' }}>
        <div
          className={'boxShadow polaroid'}
          style={{
            width: '75%',
            position: 'fixed',
            zIndex: -1,
            top: '48%',
            left: '42%',
            transformOrigin: 'center bottom',
            opacity: computedValueWithKeyframe(scrollTop, 1400, 1500, { 0: 0, 30: 1, 65: 1, 100: 0 }, 'easeInOutQuad'),
            transform: `translate(-50%, -50%) rotate(-${computedValueWithKeyframe(
              scrollTop,
              1400,
              1500,
              {
                0: 3,
                100: 4.5,
              },
              'easeInOutQuad'
            )}deg) scale(${computedValueWithKeyframe(
              scrollTop,
              1400,
              1500,
              {
                0: 1,
                100: 1.03,
              },
              'easeInOutQuad'
            )})`,
          }}>
          <Img src={IMG_6308} alt="" width={'100%'} />
        </div>
        <div
          className={'boxShadow polaroid'}
          style={{
            width: '75%',
            position: 'fixed',
            zIndex: -1,
            top: '38%',
            left: '52%',
            transformOrigin: 'center bottom',
            opacity: computedValueWithKeyframe(scrollTop, 1900, 1100, { 0: 0, 30: 1, 65: 1, 100: 0 }, 'easeInOutQuad'),
            transform: `translate(-50%, -50%) rotate(${
              computedValueWithKeyframe(
                scrollTop,
                1900,
                1200,
                {
                  0: 0.5,
                  100: 1,
                },
                'easeInOutQuad'
              ) - 1
            }deg) scale(${computedValueWithKeyframe(
              scrollTop,
              1900,
              1200,
              {
                0: 1,
                100: 1.03,
              },
              'easeInOutQuad'
            )})`,
          }}>
          <Img src={IMG_8220} alt="" width={'100%'} />
        </div>
        <div
          className={'boxShadow polaroid'}
          style={{
            width: '65%',
            position: 'fixed',
            zIndex: -1,
            top: '47%',
            left: '62%',
            transformOrigin: 'center bottom',
            opacity: computedValueWithKeyframe(scrollTop, 2500, 700, { 0: 0, 30: 1, 65: 1, 100: 0 }, 'easeInOutQuad'),
            transform: `translate3d(-${computedValueWithKeyframe(
              scrollTop,
              2500,
              700,
              {
                0: 50,
                100: 49,
              },
              'easeInOutQuad'
            )}%, -50%, 0) rotate(${computedValueWithKeyframe(
              scrollTop,
              2500,
              700,
              {
                0: 2.5,
                100: 3,
              },
              'easeInOutQuad'
            )}deg) scale(${computedValueWithKeyframe(
              scrollTop,
              2000,
              500,
              {
                0: 1,
                100: 1.03,
              },
              'easeInOutQuad'
            )})`,
          }}>
          <Img src={IMG_8515} alt="" width={'100%'} />
        </div>

        <div
          style={{
            position: 'fixed',
            zIndex: -1,
            bottom: '12%',
            left: '50%',
            width: '100%',
            transform: 'translate(-50%, 0)',
            opacity: computedValueWithKeyframe(scrollTop, 1500, 800, { 0: 0, 35: 1, 65: 1, 100: 0 }, 'easeInOutQuad'),
          }}>
          <Text text={'열심히 사랑했고,'} />
        </div>
        <div
          style={{
            position: 'fixed',
            zIndex: -1,
            bottom: '12%',
            left: '50%',
            width: '100%',
            transform: 'translate(-50%, 0)',
            opacity: computedValueWithKeyframe(scrollTop, 2300, 800, { 0: 0, 35: 1, 65: 1, 100: 0 }, 'easeInOutQuad'),
          }}>
          <Text text={'행복했습니다'} />
        </div>
      </div>
    </section>
  );
}
