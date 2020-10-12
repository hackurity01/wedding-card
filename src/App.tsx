import React from 'react';
import styled from 'styled-components';

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

import './App.css';

function App() {
  const winHeight = window.innerHeight;
  const { scrollTop } = useScroll();
  const _scrollTop = scrollTop - winHeight - 100;

  return (
    <div className="App">
      <SectionCard winHeight={winHeight} />
      {/* 0 ~ 2100 */}
      <Section1 scrollTop={_scrollTop} />
      {/* 2100 ~ 3900 */}
      <Section2 scrollTop={_scrollTop} />
      {/* 3900 ~ 5500 */}
      <Section3 scrollTop={_scrollTop} />
      {/* 5500 ~ 7000 */}
      <Section4 scrollTop={_scrollTop} />
      {/* 7000 ~ 8800 */}
      <Section5 scrollTop={_scrollTop} />
      {/* 8800 ~ 10400 */}
      <Section6 scrollTop={_scrollTop} />
      {/* 10400 ~ 14000 */}
      <Section7 scrollTop={_scrollTop} />
      <BackgroundWhite>
        {/* 14000 ~ */}
        <SectionPhotos scrollTop={_scrollTop - 13630 + 1200 > 0 ? _scrollTop - 13630 + 1200 : 0} />
        <SectionMap />
        <SectionInfomation />
      </BackgroundWhite>
    </div>
  );
}

const BackgroundWhite = styled.div`
  background: #fff;
`;

export default App;
