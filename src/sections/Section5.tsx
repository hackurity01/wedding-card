import React from 'react';

import _DSC1037 from 'src/assets/imgs/section5/_DSC1037.jpg';
import IMG_8576 from 'src/assets/imgs/section5/IMG_8576.jpg';
import { Img } from 'src/components/Img';
import { computedValueWithKeyframe } from 'src/lib/helper';
import { Text } from 'src/components/Text';

export function Section5({ scrollTop }: { scrollTop: number }) {
  return (
    <section>
      <div style={{ height: '1800px' }}>
        <div
          className={'boxShadow'}
          style={{
            width: '95%',
            position: 'fixed',
            zIndex: -1,
            bottom: '60%',
            left: '50%',
            transformOrigin: 'center',
            opacity: computedValueWithKeyframe(scrollTop, 6300, 1400, { 0: 0, 30: 1, 65: 1, 100: 0 }, 'easeInOutQuad'),
            transform: `translate(-50%, 0)`,
          }}>
          <Img src={_DSC1037} alt="" width={'100%'} />
        </div>
        <div
          className={'boxShadow'}
          style={{
            width: '95%',
            position: 'fixed',
            zIndex: -1,
            bottom: '2.5%',
            left: '50%',
            transformOrigin: 'center',
            opacity: computedValueWithKeyframe(scrollTop, 7300, 800, { 0: 0, 30: 1, 65: 1, 100: 0 }, 'easeInOutQuad'),
            transform: `translate(-50%, 0)`,
          }}>
          <Img src={IMG_8576} alt="" width={'100%'} />
        </div>
        <div
          style={{
            position: 'fixed',
            zIndex: -1,
            bottom: 'calc(35vw + 30%)',
            left: '50%',
            width: '100%',
            transform: 'translate(-50%, 0)',
          }}>
          <Text
            style={{
              color: 'white',
              opacity: computedValueWithKeyframe(
                scrollTop,
                6400,
                1400,
                { 0: 0, 35: 1, 65: 1, 100: 0 },
                'easeInOutQuad'
              ),
            }}
            text={<>양보하고&nbsp;&nbsp;</>}
          />

          <Text
            style={{
              color: 'white',
              opacity: computedValueWithKeyframe(
                scrollTop,
                6700,
                1200,
                { 0: 0, 35: 1, 65: 1, 100: 0 },
                'easeInOutQuad'
              ),
            }}
            text={<>배려하는 법을&nbsp;&nbsp;</>}
          />
          <Text
            style={{
              color: 'white',
              opacity: computedValueWithKeyframe(scrollTop, 7200, 800, { 0: 0, 35: 1, 65: 1, 100: 0 }, 'easeInOutQuad'),
            }}
            text={<>배웠습니다</>}
          />
        </div>
      </div>
    </section>
  );
}
