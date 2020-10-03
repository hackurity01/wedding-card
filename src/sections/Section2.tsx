import React from 'react';

import IMG_5016 from 'src/assets/imgs/IMG_5016.jpg';
import { Img } from 'src/components/Img';
import { Text } from 'src/components/Text';
import { computedValueWithKeyframe } from 'src/lib/helper';

export function Section2({ scrollTop }: { scrollTop: number }) {
  return (
    <section>
      <div style={{ height: '1100px' }}>
        <div
          className={'boxShadow'}
          style={{
            width: '75%',
            position: 'fixed',
            top: '50%',
            left: '42%',
            transformOrigin: 'center bottom',
            opacity: computedValueWithKeyframe(scrollTop, 1400, 900, { 0: 0, 30: 1, 65: 1, 100: 0 }, 'easeInOutQuad'),
            transform: `translate(-50%, -50%) rotate(-${computedValueWithKeyframe(
              scrollTop,
              1400,
              900,
              {
                0: 3,
                100: 4.5,
              },
              'easeInOutQuad'
            )}deg) scale(${computedValueWithKeyframe(
              scrollTop,
              1400,
              900,
              {
                0: 1,
                100: 1.03,
              },
              'easeInOutQuad'
            )})`,
          }}>
          <Img src={IMG_5016} alt="" width={'100%'} />
        </div>
        <div
          className={'boxShadow'}
          style={{
            width: '75%',
            position: 'fixed',
            top: '48%',
            left: '50%',
            transformOrigin: 'center bottom',
            opacity: computedValueWithKeyframe(scrollTop, 1700, 700, { 0: 0, 30: 1, 65: 1, 100: 0 }, 'easeInOutQuad'),
            transform: `translate(-50%, -50%) rotate(-${computedValueWithKeyframe(
              scrollTop,
              1700,
              700,
              {
                0: 0.5,
                100: 1,
              },
              'easeInOutQuad'
            )}deg) scale(${computedValueWithKeyframe(
              scrollTop,
              1700,
              700,
              {
                0: 1,
                100: 1.03,
              },
              'easeInOutQuad'
            )})`,
          }}>
          <Img src={IMG_5016} alt="" width={'100%'} />
        </div>
        <div
          className={'boxShadow'}
          style={{
            width: '75%',
            position: 'fixed',
            top: '47%',
            left: '57%',
            transformOrigin: 'center bottom',
            opacity: computedValueWithKeyframe(scrollTop, 2000, 500, { 0: 0, 30: 1, 65: 1, 100: 0 }, 'easeInOutQuad'),
            transform: `translate(-${computedValueWithKeyframe(
              scrollTop,
              2000,
              500,
              {
                0: 50,
                100: 49,
              },
              'easeInOutQuad'
            )}%, -50%) rotate(${computedValueWithKeyframe(
              scrollTop,
              2000,
              500,
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
          <Img src={IMG_5016} alt="" width={'100%'} />
        </div>

        <div
          style={{
            position: 'fixed',
            bottom: '5%',
            left: '50%',
            width: '100%',
            transform: 'translate(-50%, -50%)',
            opacity: computedValueWithKeyframe(scrollTop, 1550, 400, { 0: 0, 35: 1, 65: 1, 100: 0 }, 'easeInOutQuad'),
          }}>
          <Text text={'열심히 사랑했고,'} />
        </div>
        <div
          style={{
            position: 'fixed',
            bottom: '5%',
            left: '50%',
            width: '100%',
            transform: 'translate(-50%, -50%)',
            opacity: computedValueWithKeyframe(scrollTop, 2000, 450, { 0: 0, 35: 1, 65: 1, 100: 0 }, 'easeInOutQuad'),
          }}>
          <Text text={'행복했습니다'} />
        </div>
      </div>
    </section>
  );
}
