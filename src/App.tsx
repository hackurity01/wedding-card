import React from 'react';

import './App.css';
import { SectionCard } from 'src/sections/SectionCard';
import { Section1 } from 'src/sections/Section1';
import { Section2 } from 'src/sections/Section2';
import { Section3 } from 'src/sections/Section3';
import { Section4 } from 'src/sections/Section4';
import { Section5 } from 'src/sections/Section5';
import { Section6 } from 'src/sections/Section6';
import { Section7 } from 'src/sections/Section7';
import { SectionPhotos } from 'src/sections/SectionPhotos';
import { useScroll } from 'src/lib/useScroll';
import { SectionMap } from 'src/sections/SectionMap';
import { SectionInfomation } from 'src/sections/SectionInfomation';

function App() {
  const winHeight = window.innerHeight;
  const { scrollTop } = useScroll();
  const _scrollTop = scrollTop - winHeight - 100;

  return (
    <div className="App">
      <SectionCard winHeight={winHeight} />
      {/* 0 ~ 1400 */}
      <Section1 scrollTop={_scrollTop} />
      {/* 1400 ~ 3200 */}
      <Section2 scrollTop={_scrollTop} />
      {/* 3200 ~ 4800 */}
      <Section3 scrollTop={_scrollTop} />
      {/* 4800 ~ 6300 */}
      <Section4 scrollTop={_scrollTop} />
      {/* 6300 ~ 8100 */}
      <Section5 scrollTop={_scrollTop} />
      {/* 8100 ~ 9700 */}
      <Section6 scrollTop={_scrollTop} />
      {/* 9700 ~ 13300 */}
      <Section7 scrollTop={_scrollTop} />
      <div style={{ background: 'white' }}>
        {/* 13300 ~ */}
        <SectionPhotos scrollTop={_scrollTop - 12930 + 1200} />
        <SectionMap />
        <SectionInfomation />
      </div>
    </div>
  );
}

export default App;
