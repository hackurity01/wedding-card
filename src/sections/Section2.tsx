import React from 'react';

import { Picture } from 'src/components/Picture';
import { Text } from 'src/components/Text';
import { computedValueWithKeyframe } from 'src/lib/helper';

import IMG_6308 from 'src/assets/imgs/section2/IMG_6308.jpg';
import IMG_6308_webp from 'src/assets/imgs/section2/IMG_6308.webp';
import _DSC1006 from 'src/assets/imgs/section2/DSC1006.jpg';
import _DSC1006_webp from 'src/assets/imgs/section2/DSC1006.webp';
import IMG_2480 from 'src/assets/imgs/section2/IMG_2480.jpg';
import IMG_2480_webp from 'src/assets/imgs/section2/IMG_2480.webp';

export function Section2({ scrollTop }: { scrollTop: number }) {
  return (
    <section>
      <div style={{ height: '1100px' }}>
        <div
          className={'boxShadow'}
          style={{
            width: '75%',
            maxWidth: '375px',
            position: 'fixed',
            zIndex: -1,
            top: '48%',
            left: '42%',
            transformOrigin: 'center bottom',
            opacity: computedValueWithKeyframe(scrollTop, 2100, 1500, { 0: 0, 30: 1, 65: 1, 100: 0 }, 'easeInOutQuad'),
            transform: `translate(-50%, -50%) rotate(-${computedValueWithKeyframe(
              scrollTop,
              2100,
              1500,
              {
                0: 3,
                100: 4.5,
              },
              'easeInOutQuad'
            )}deg) scale(${computedValueWithKeyframe(
              scrollTop,
              2100,
              1500,
              {
                0: 1,
                100: 1.03,
              },
              'easeInOutQuad'
            )})`,
          }}>
          <Picture jpg={IMG_6308} webp={IMG_6308_webp} />
        </div>
        <div
          className={'boxShadow'}
          style={{
            width: '75%',
            maxWidth: '375px',
            position: 'fixed',
            zIndex: -1,
            top: '38%',
            left: '52%',
            transformOrigin: 'center bottom',
            opacity: computedValueWithKeyframe(scrollTop, 2600, 1100, { 0: 0, 30: 1, 65: 1, 100: 0 }, 'easeInOutQuad'),
            transform: `translate(-50%, -50%) rotate(${
              computedValueWithKeyframe(
                scrollTop,
                2600,
                1200,
                {
                  0: 0.5,
                  100: 1,
                },
                'easeInOutQuad'
              ) - 1
            }deg) scale(${computedValueWithKeyframe(
              scrollTop,
              2600,
              1200,
              {
                0: 1,
                100: 1.03,
              },
              'easeInOutQuad'
            )})`,
          }}>
          <Picture jpg={_DSC1006} webp={_DSC1006_webp} />
        </div>
        <div
          className={'boxShadow'}
          style={{
            width: '65%',
            maxWidth: '325px',
            position: 'fixed',
            zIndex: -1,
            top: '47%',
            left: '62%',
            transformOrigin: 'center bottom',
            opacity: computedValueWithKeyframe(scrollTop, 3200, 700, { 0: 0, 30: 1, 65: 1, 100: 0 }, 'easeInOutQuad'),
            transform: `translate3d(-${computedValueWithKeyframe(
              scrollTop,
              3200,
              700,
              {
                0: 50,
                100: 49,
              },
              'easeInOutQuad'
            )}%, -50%, 0) rotate(${computedValueWithKeyframe(
              scrollTop,
              3200,
              700,
              {
                0: 2.5,
                100: 3,
              },
              'easeInOutQuad'
            )}deg) scale(${computedValueWithKeyframe(
              scrollTop,
              2700,
              500,
              {
                0: 1,
                100: 1.03,
              },
              'easeInOutQuad'
            )})`,
          }}>
          <Picture jpg={IMG_2480} webp={IMG_2480_webp} />
        </div>

        <div
          style={{
            position: 'fixed',
            zIndex: -1,
            bottom: '12%',
            left: '50%',
            width: '100%',
            transform: 'translate(-50%, 0)',
            opacity: computedValueWithKeyframe(scrollTop, 2200, 800, { 0: 0, 35: 1, 65: 1, 100: 0 }, 'easeInOutQuad'),
          }}>
          <Text text={'열심히 사랑했고'} />
        </div>
        <div
          style={{
            position: 'fixed',
            zIndex: -1,
            bottom: '12%',
            left: '50%',
            width: '100%',
            transform: 'translate(-50%, 0)',
            opacity: computedValueWithKeyframe(scrollTop, 3000, 800, { 0: 0, 35: 1, 65: 1, 100: 0 }, 'easeInOutQuad'),
          }}>
          <Text text={'함께 성장했습니다.'} />
        </div>
      </div>
    </section>
  );
}
