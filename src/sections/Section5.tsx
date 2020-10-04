import React from 'react';

import IMG_0077 from 'src/assets/imgs/IMG_0077.jpg';
import { Img } from 'src/components/Img';
import { computedValueWithKeyframe } from 'src/lib/helper';

export function Section5({ scrollTop }: { scrollTop: number }) {
  return (
    <section>
      <div style={{ height: '1800px' }}>
        <div
          className={'boxShadow'}
          style={{
            width: '95%',
            position: 'fixed',
            top: '5%',
            left: '50%',
            transformOrigin: 'center',
            opacity: computedValueWithKeyframe(scrollTop, 6300, 1400, { 0: 0, 30: 1, 65: 1, 100: 0 }, 'easeInOutQuad'),
            transform: `translate(-50%, 0)`,
          }}>
          <Img src={IMG_0077} alt="" width={'100%'} />
        </div>
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            width: '100%',
            transform: 'translate(-50%, -50%)',
          }}>
          <span
            style={{
              color: 'white',
              opacity: computedValueWithKeyframe(
                scrollTop,
                6400,
                1400,
                { 0: 0, 35: 1, 65: 1, 100: 0 },
                'easeInOutQuad'
              ),
            }}>
            양보하고&nbsp;&nbsp;
          </span>
          <span
            style={{
              color: 'white',
              opacity: computedValueWithKeyframe(
                scrollTop,
                6700,
                1200,
                { 0: 0, 35: 1, 65: 1, 100: 0 },
                'easeInOutQuad'
              ),
            }}>
            배려하는 법을&nbsp;&nbsp;
          </span>
          <span
            style={{
              color: 'white',
              opacity: computedValueWithKeyframe(scrollTop, 7200, 800, { 0: 0, 35: 1, 65: 1, 100: 0 }, 'easeInOutQuad'),
            }}>
            배웠습니다.
          </span>
        </div>
        <div
          className={'boxShadow'}
          style={{
            width: '95%',
            position: 'fixed',
            bottom: '5%',
            left: '50%',
            transformOrigin: 'center',
            opacity: computedValueWithKeyframe(scrollTop, 7300, 800, { 0: 0, 30: 1, 65: 1, 100: 0 }, 'easeInOutQuad'),
            transform: `translate(-50%, 0)`,
          }}>
          <Img src={IMG_0077} alt="" width={'100%'} />
        </div>
      </div>
    </section>
  );
}
