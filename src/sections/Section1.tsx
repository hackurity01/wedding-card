import React from 'react';

import IMG_5016 from 'src/assets/imgs/IMG_5016.jpg';
import { Img } from 'src/components/Img';
import { Text } from 'src/components/Text';
import { computedValueWithKeyframe } from 'src/lib/helper';

export function Section1({ scrollTop }: { scrollTop: number }) {
  return (
    <section>
      <div style={{ height: '700px' }}>
        <Text
          text={'4년 전, 겨울'}
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: computedValueWithKeyframe(scrollTop, 0, 700, { 0: 0, 30: 1, 70: 1, 100: 0 }, 'easeInOutQuad'),
          }}
        />
      </div>
      <div style={{ height: '700px' }}>
        <div
          style={{
            width: '100%',
            position: 'fixed',
            top: '50%',
            left: '50%',
            opacity: computedValueWithKeyframe(scrollTop, 700, 700, { 0: 0, 30: 1, 65: 1, 100: 0 }, 'easeInOutQuad'),
            transform: `translate(-50%, -50%) scale(${computedValueWithKeyframe(
              scrollTop,
              700,
              700,
              {
                0: 1.28,
                100: 1.35,
              },
              'easeInOutQuad'
            )})`,
          }}>
          <Img src={IMG_5016} alt="" width={'100%'} />
          <div className={'gradient-overlay'} />
        </div>
        <div
          style={{
            position: 'fixed',
            top: '88%',
            left: '50%',
            width: '100%',
            transform: 'translate(-50%, -50%)',
            opacity: computedValueWithKeyframe(
              scrollTop,
              700,
              700,
              { 0: 0, 10: 0, 35: 1, 65: 1, 90: 0, 100: 0 },
              'easeInOutQuad'
            ),
          }}>
          <Text text={'서로 다른 두 사람이 만났습니다.'} />
        </div>
      </div>
    </section>
  );
}
