import React from 'react';

import _DSC1025 from 'src/assets/imgs/section4/DSC1025.jpg';
import _DSC1025_webp from 'src/assets/imgs/section4/DSC1025.webp';
import _DSC1133 from 'src/assets/imgs/section4/DSC1133.jpg';
import _DSC1133_webp from 'src/assets/imgs/section4/DSC1133.webp';
import { Text } from 'src/components/Text';
import { computedValueWithKeyframe } from 'src/lib/helper';
import { Picture } from 'src/components/Picture';
import { usePreloadImages } from 'src/lib/usePreloadImages';

export function Section4({ scrollTop }: { scrollTop: number }) {
  usePreloadImages([_DSC1025_webp, _DSC1133_webp]);

  return (
    <section>
      <div style={{ height: '1600px' }}>
        {5100 <= scrollTop && scrollTop <= 7000 && (
          <>
            <div
              style={{
                position: 'fixed',
                zIndex: -1,
                top: '10%',
                left: '50%',
                width: '100%',
                transform: 'translate(-50%, 0)',
                opacity: computedValueWithKeyframe(
                  scrollTop,
                  5500,
                  1400,
                  { 0: 0, 35: 1, 65: 1, 100: 0 },
                  'easeInOutQuad'
                ),
              }}>
              <Text text={'함께 하는 것만으로도'} />
            </div>
            <div
              className={'boxShadow'}
              style={{
                width: '86%',
                maxWidth: '460px',
                position: 'fixed',
                zIndex: -1,
                top: '50%',
                left: '47%',
                transformOrigin: 'center',
                opacity: computedValueWithKeyframe(
                  scrollTop,
                  5600,
                  1400,
                  { 0: 0, 30: 1, 65: 1, 100: 0 },
                  'easeInOutQuad'
                ),
                transform: `translate(-50%, -50%)`,
              }}>
              <Picture jpg={_DSC1025} webp={_DSC1025_webp} />
            </div>
            <div
              className={'boxShadow'}
              style={{
                width: '60%',
                maxWidth: '350px',
                position: 'fixed',
                zIndex: -1,
                top: '50%',
                left: '64%',
                transformOrigin: 'center',
                opacity: computedValueWithKeyframe(
                  scrollTop,
                  6200,
                  700,
                  { 0: 0, 30: 1, 65: 1, 100: 0 },
                  'easeInOutQuad'
                ),
                transform: `translate(-50%, -50%)`,
              }}>
              <Picture jpg={_DSC1133} webp={_DSC1133_webp} />
            </div>
            <div
              style={{
                position: 'fixed',
                zIndex: -1,
                bottom: '10%',
                left: '50%',
                width: '100%',
                transform: 'translate(-50%, 0)',
                opacity: computedValueWithKeyframe(
                  scrollTop,
                  6300,
                  700,
                  { 0: 0, 35: 1, 65: 1, 100: 0 },
                  'easeInOutQuad'
                ),
              }}>
              <Text text={'서로가 서로에게'} />
            </div>
          </>
        )}
      </div>
    </section>
  );
}
