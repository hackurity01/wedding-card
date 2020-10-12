import React from 'react';

import { computedValueWithKeyframe } from 'src/lib/helper';
import { Picture } from 'src/components/Picture';
import { Text } from 'src/components/Text';

import _DSC1037 from 'src/assets/imgs/section5/DSC1037.jpg';
import _DSC1037_webp from 'src/assets/imgs/section5/DSC1037.webp';
import IMG_7516 from 'src/assets/imgs/section5/IMG_7516.jpg';
import IMG_7516_webp from 'src/assets/imgs/section5/IMG_7516.webp';
import { usePreloadImages } from 'src/lib/usePreloadImages';

export function Section5({ scrollTop }: { scrollTop: number }) {
  usePreloadImages([_DSC1037_webp, IMG_7516_webp]);

  return (
    <section>
      <div style={{ height: '1800px' }}>
        {7000 <= scrollTop && scrollTop <= 8800 && (
          <>
            <div
              style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%)`,
                zIndex: -1,
                width: '100%',
              }}>
              <div
                className={'boxShadow'}
                style={{
                  width: '92%',
                  maxWidth: '460px',
                  opacity: computedValueWithKeyframe(
                    scrollTop,
                    7000,
                    1400,
                    { 0: 0, 30: 1, 65: 1, 100: 0 },
                    'easeInOutQuad'
                  ),
                  margin: 'auto',
                }}>
                <Picture jpg={_DSC1037} webp={_DSC1037_webp} />
              </div>

              <div style={{ width: '100%', padding: '35px 0' }}>
                <Text
                  style={{
                    color: 'white',
                    opacity: computedValueWithKeyframe(
                      scrollTop,
                      7100,
                      1400,
                      { 0: 0, 35: 1, 65: 1, 100: 0 },
                      'easeInOutQuad'
                    ),
                  }}
                  text={<>가장&nbsp;&nbsp;</>}
                />

                <Text
                  style={{
                    color: 'white',
                    opacity: computedValueWithKeyframe(
                      scrollTop,
                      7400,
                      1200,
                      { 0: 0, 35: 1, 65: 1, 100: 0 },
                      'easeInOutQuad'
                    ),
                  }}
                  text={<>큰 힘이&nbsp;&nbsp;</>}
                />
                <Text
                  style={{
                    color: 'white',
                    opacity: computedValueWithKeyframe(
                      scrollTop,
                      7900,
                      800,
                      { 0: 0, 35: 1, 65: 1, 100: 0 },
                      'easeInOutQuad'
                    ),
                  }}
                  text={<>되어 주었습니다</>}
                />
              </div>
              <div
                className={'boxShadow'}
                style={{
                  width: '92%',
                  maxWidth: '460px',
                  opacity: computedValueWithKeyframe(
                    scrollTop,
                    8000,
                    800,
                    { 0: 0, 30: 1, 65: 1, 100: 0 },
                    'easeInOutQuad'
                  ),
                  margin: 'auto',
                }}>
                <Picture jpg={IMG_7516} webp={IMG_7516_webp} />
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
