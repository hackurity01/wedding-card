import React from 'react';

import { Text } from 'src/components/Text';
import { computedValueWithKeyframe } from 'src/lib/helper';
import { Picture } from 'src/components/Picture';

import IMG_6605 from 'src/assets/imgs/section3/IMG_6605.jpg';
import IMG_6605_webp from 'src/assets/imgs/section3/IMG_6605.webp';

export function Section3({ scrollTop }: { scrollTop: number }) {
  return (
    <section>
      <div style={{ height: '1600px' }}>
        <div
          style={{
            position: 'fixed',
            width: '100%',
            zIndex: -1,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}>
          <div
            style={{
              opacity: computedValueWithKeyframe(
                scrollTop,
                3900,
                1500,
                { 0: 0, 35: 1, 65: 1, 100: 0 },
                'easeInOutQuad'
              ),
            }}>
            <Text text={'때로는 슬프기도,'} />
          </div>
          <div
            className={'boxShadow'}
            style={{
              width: '95%',
              maxWidth: '475px',
              opacity: computedValueWithKeyframe(
                scrollTop,
                4400,
                1050,
                { 0: 0, 30: 1, 65: 1, 100: 0 },
                'easeInOutQuad'
              ),
              margin: '35px auto',
            }}>
            <Picture jpg={IMG_6605} webp={IMG_6605_webp} />
          </div>
          <div
            style={{
              opacity: computedValueWithKeyframe(scrollTop, 4900, 600, { 0: 0, 35: 1, 65: 1, 100: 0 }, 'easeInOutQuad'),
            }}>
            <Text text={'감정이 상하기도 했지만'} />
          </div>
        </div>
      </div>
    </section>
  );
}
