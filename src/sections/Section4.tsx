import React from 'react';

import _DSC1025 from 'src/assets/imgs/section4/_DSC1025.jpg';
import _DSC1131 from 'src/assets/imgs/section4/_DSC1131.jpg';
import { Img } from 'src/components/Img';
import { Text } from 'src/components/Text';
import { computedValueWithKeyframe } from 'src/lib/helper';

export function Section4({ scrollTop }: { scrollTop: number }) {
  return (
    <section>
      <div style={{ height: '1600px' }}>
        <div
          style={{
            position: 'fixed',
            zIndex: -1,
            top: '10%',
            left: '50%',
            width: '100%',
            transform: 'translate(-50%, 0)',
            opacity: computedValueWithKeyframe(scrollTop, 4800, 1400, { 0: 0, 35: 1, 65: 1, 100: 0 }, 'easeInOutQuad'),
          }}>
          <Text text={'오히려 서로를 더욱'} />
        </div>
        <div
          className={'boxShadow'}
          style={{
            width: '85%',
            position: 'fixed',
            zIndex: -1,
            top: '50%',
            left: '45%',
            transformOrigin: 'center',
            opacity: computedValueWithKeyframe(scrollTop, 4900, 1400, { 0: 0, 30: 1, 65: 1, 100: 0 }, 'easeInOutQuad'),
            transform: `translate(-50%, -50%)`,
          }}>
          <Img src={_DSC1025} alt="" width={'100%'} />
        </div>
        <div
          className={'boxShadow'}
          style={{
            width: '70%',
            position: 'fixed',
            zIndex: -1,
            top: '50%',
            left: '60%',
            transformOrigin: 'center',
            opacity: computedValueWithKeyframe(scrollTop, 5500, 700, { 0: 0, 30: 1, 65: 1, 100: 0 }, 'easeInOutQuad'),
            transform: `translate(-50%, -50%)`,
          }}>
          <Img src={_DSC1131} alt="" width={'100%'} />
        </div>
        <div
          style={{
            position: 'fixed',
            zIndex: -1,
            bottom: '10%',
            left: '50%',
            width: '100%',
            transform: 'translate(-50%, 0)',
            opacity: computedValueWithKeyframe(scrollTop, 5600, 700, { 0: 0, 35: 1, 65: 1, 100: 0 }, 'easeInOutQuad'),
          }}>
          <Text text={'이해할 수 있었고'} />
        </div>
      </div>
    </section>
  );
}
