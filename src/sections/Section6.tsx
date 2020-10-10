import React from 'react';

import _YY_1183 from 'src/assets/imgs/photos/_YY_1183.jpg';
import { Img } from 'src/components/Img';
import { computedValueWithKeyframe } from 'src/lib/helper';

export function Section6({ scrollTop }: { scrollTop: number }) {
  return (
    <section>
      <div style={{ height: '1800px' }}>
        <div
          className={'boxShadow'}
          style={{
            width: '95%',
            position: 'fixed',
            zIndex: -1,
            bottom: '50%',
            left: '50%',
            transformOrigin: 'center',
            opacity: computedValueWithKeyframe(scrollTop, 8100, 1400, { 0: 0, 30: 1, 65: 1, 100: 0 }, 'easeInOutQuad'),
            transform: `translate(-50%, 0)`,
          }}>
          <Img src={_YY_1183} alt="" width={'100%'} />
        </div>
        <div
          style={{
            position: 'fixed',
            zIndex: -1,
            top: '75%',
            left: '50%',
            width: '90%',
            transform: 'translate(-50%, -50%)',
          }}>
          <div
            style={{
              color: 'white',
              opacity: computedValueWithKeyframe(
                scrollTop,
                8400,
                1200,
                { 0: 0, 35: 1, 65: 1, 100: 0 },
                'easeInOutQuad'
              ),
              marginBottom: 15,
            }}>
            그리고 이제
          </div>
          <div
            style={{
              color: 'white',
              opacity: computedValueWithKeyframe(scrollTop, 8800, 900, { 0: 0, 35: 1, 65: 1, 100: 0 }, 'easeInOutQuad'),
            }}>
            서로와 평생을 약속하려 합니다
          </div>
        </div>
      </div>
    </section>
  );
}
