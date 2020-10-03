import React from 'react';
import Plx from 'react-plx';

import IMG_5016 from 'src/assets/imgs/IMG_5016.jpg';
import { Img } from 'src/components/Img';
import { Text } from 'src/components/Text';
import { Scene } from 'src/components/Scene';

export function Section0() {
  const pd1 = [
    {
      start: '.scene1',
      duration: 150,
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: 'opacity',
        },
      ],
    },
    {
      start: '.scene1',
      startOffset: 350,
      duration: 150,
      properties: [
        {
          startValue: 1,
          endValue: 0,
          property: 'opacity',
        },
      ],
    },
  ];
  const pd2 = [
    {
      start: '.scene2',
      duration: 150,
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: 'opacity',
        },
      ],
    },
    {
      start: '.scene2',
      startOffset: 350,
      duration: 150,
      properties: [
        {
          startValue: 1,
          endValue: 0,
          property: 'opacity',
        },
      ],
    },
  ];
  const pd3 = [
    {
      start: '.scene2',
      duration: 500,
      properties: [
        {
          startValue: 1.1,
          endValue: 1.2,
          property: 'scale',
        },
      ],
    },
  ];
  const pd4 = [
    {
      start: '.scene2',
      startOffset: 50,
      duration: 150,
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: 'opacity',
        },
      ],
    },
    {
      start: '.scene2',
      startOffset: 300,
      duration: 150,
      properties: [
        {
          startValue: 1,
          endValue: 0,
          property: 'opacity',
        },
      ],
    },
  ];
  const pd5 = [
    {
      start: '.scene2',
      startOffset: 50,
      duration: 450,
      properties: [
        {
          startValue: 1,
          endValue: 1.1,
          property: 'scale',
        },
      ],
    },
  ];

  return (
    <section>
      <div style={{ height: '500px' }} />
      <Scene duration={'100vh'} className={'scene1'}>
        <Plx parallaxData={pd1} easing="ease" style={{ opacity: 0 }}>
          <div
            style={{ position: 'fixed', top: '50%', left: '50%', width: '100%', transform: 'translate(-50%, -50%)' }}>
            {/*<Plx parallaxData={pd2}>*/}
            <Text text={'4년 전, 겨울'} />
            {/*</Plx>*/}
          </div>
        </Plx>
      </Scene>

      <Scene duration={'500px'} className={'scene2'}>
        <Plx parallaxData={pd2} easing="ease" style={{ opacity: 0 }}>
          <div
            style={{ position: 'fixed', top: '50%', left: '50%', width: '100%', transform: 'translate(-50%, -50%)' }}>
            <Plx parallaxData={pd3}>
              <Img src={IMG_5016} alt="" width={'100%'} />
            </Plx>
          </div>
        </Plx>
        <Plx parallaxData={pd4} easing="ease" style={{ opacity: 0 }}>
          <div
            style={{ position: 'fixed', top: '50%', left: '50%', width: '100%', transform: 'translate(-50%, -50%)' }}>
            <Plx parallaxData={pd5}>
              <Text text={'서로 다른 두 사람이 만났습니다.'} />
            </Plx>
          </div>
        </Plx>
      </Scene>

      <div style={{ height: '100vh' }} />
    </section>
  );
}
