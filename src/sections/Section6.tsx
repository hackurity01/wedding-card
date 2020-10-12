import React from 'react';

import { computedValueWithKeyframe } from 'src/lib/helper';
import { Picture } from 'src/components/Picture';

import _YY_1183 from 'src/assets/imgs/section6/YY_1183.jpg';
import _YY_1183_webp from 'src/assets/imgs/section6/YY_1183.webp';
import { usePreloadImages } from 'src/lib/usePreloadImages';

export function Section6({ scrollTop }: { scrollTop: number }) {
  usePreloadImages([_YY_1183_webp]);

  return (
    <section>
      <div style={{ height: '1800px' }}>
        {8800 <= scrollTop && scrollTop <= 10400 && (
          <>
            <div
              className={'boxShadow'}
              style={{
                width: '95%',
                maxWidth: '475px',
                position: 'fixed',
                zIndex: -1,
                bottom: '50%',
                left: '50%',
                transformOrigin: 'center',
                opacity: computedValueWithKeyframe(
                  scrollTop,
                  8800,
                  1400,
                  { 0: 0, 30: 1, 65: 1, 100: 0 },
                  'easeInOutQuad'
                ),
                transform: `translate(-50%, 0)`,
              }}>
              <Picture jpg={_YY_1183} webp={_YY_1183_webp} />
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
                    9100,
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
                  opacity: computedValueWithKeyframe(
                    scrollTop,
                    9500,
                    900,
                    { 0: 0, 35: 1, 65: 1, 100: 0 },
                    'easeInOutQuad'
                  ),
                }}>
                서로와의 평생을 약속하려 합니다
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
