import React from 'react';

import IMG_0077 from 'src/assets/imgs/IMG_0077.jpg';
import { Img } from 'src/components/Img';
import { Text } from 'src/components/Text';
import { computedValueWithKeyframe } from 'src/lib/helper';

export function Section3({ scrollTop }: { scrollTop: number }) {
  return (
    <section>
      <div style={{ height: '1600px' }}>
        <div
          style={{
            position: 'fixed',
            top: '10%',
            left: '50%',
            width: '100%',
            transform: 'translate(-50%, -50%)',
            opacity: computedValueWithKeyframe(scrollTop, 3200, 1500, { 0: 0, 35: 1, 65: 1, 100: 0 }, 'easeInOutQuad'),
          }}>
          <Text text={'때로는 슬프기도,'} />
        </div>
        <div
          className={'boxShadow'}
          style={{
            width: '95%',
            position: 'fixed',
            top: '50%',
            left: '50%',
            transformOrigin: 'center',
            opacity: computedValueWithKeyframe(scrollTop, 3700, 1050, { 0: 0, 30: 1, 65: 1, 100: 0 }, 'easeInOutQuad'),
            transform: `translate(-50%, -50%)`,
          }}>
          <Img src={IMG_0077} alt="" width={'100%'} />
        </div>
        <div
          style={{
            position: 'fixed',
            bottom: '10%',
            left: '50%',
            width: '100%',
            transform: 'translate(-50%, -50%)',
            opacity: computedValueWithKeyframe(scrollTop, 4200, 600, { 0: 0, 35: 1, 65: 1, 100: 0 }, 'easeInOutQuad'),
          }}>
          <Text text={'감정이 상하기도 했지만'} />
        </div>
      </div>
    </section>
  );
}
