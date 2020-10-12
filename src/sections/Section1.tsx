import React from 'react';

import { Picture } from 'src/components/Picture';
import { Text } from 'src/components/Text';
import { computedValueWithKeyframe } from 'src/lib/helper';

import hanjoo from 'src/assets/imgs/section1/hanjoo.jpg';
import hanjoo_webp from 'src/assets/imgs/section1/hanjoo.webp';
import IMG_8972 from 'src/assets/imgs/section1/IMG_8972.jpg';
import IMG_8972_webp from 'src/assets/imgs/section1/IMG_8972.webp';

export function Section1({ scrollTop }: { scrollTop: number }) {
  return (
    <section>
      <div style={{ height: '700px' }}>
        {0 <= scrollTop && scrollTop <= 2100 && (
          <Text
            text={'4년 전, 겨울'}
            style={{
              position: 'fixed',
              zIndex: -1,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              opacity: computedValueWithKeyframe(scrollTop, 0, 700, { 0: 0, 30: 1, 70: 1, 100: 0 }, 'easeInOutQuad'),
            }}
          />
        )}
      </div>
      <div style={{ height: '700px' }}>
        {0 <= scrollTop && scrollTop <= 2100 && (
          <div
            style={{
              width: '100%',
              maxWidth: '500px',
              position: 'fixed',
              zIndex: -1,
              top: '50%',
              left: '50%',
              opacity: computedValueWithKeyframe(scrollTop, 700, 700, { 0: 0, 30: 1, 65: 1, 100: 0 }, 'easeInOutQuad'),
              transform: `translate(-50%, -50%)`,
            }}>
            <Picture jpg={IMG_8972} webp={IMG_8972_webp} />
            <br />
            <br />
            <Text text={'컴퓨터를 좋아하는 남자와'} />
          </div>
        )}
      </div>
      <div style={{ height: '700px' }}>
        {0 <= scrollTop && scrollTop <= 2100 && (
          <div
            style={{
              width: '100%',
              maxWidth: '500px',
              position: 'fixed',
              zIndex: -1,
              top: '50%',
              left: '50%',
              opacity: computedValueWithKeyframe(scrollTop, 1400, 700, { 0: 0, 30: 1, 65: 1, 100: 0 }, 'easeInOutQuad'),
              transform: `translate(-50%, -50%)`,
            }}>
            <Picture jpg={hanjoo} webp={hanjoo_webp} />
            <br />
            <br />
            <Text text={'영어를 좋아하는 여자가 만났습니다.'} />
          </div>
        )}
      </div>
    </section>
  );
}
