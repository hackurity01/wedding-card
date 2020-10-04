import React from 'react';

import './App.css';
import { Section1 } from 'src/sections/Section1';
import { Section2 } from 'src/sections/Section2';
import { Section3 } from 'src/sections/Section3';
import { Section4 } from 'src/sections/Section4';
import { Section5 } from 'src/sections/Section5';
import { useScroll } from 'src/lib/useScroll';

function App() {
  const { scrollTop } = useScroll();
  return (
    <div className="App" style={{ marginBottom: '1000px' }}>
      {/* 0 ~ 1400 */}
      <Section1 scrollTop={scrollTop} />
      {/* 1400 ~ 3200 */}
      <Section2 scrollTop={scrollTop} />
      {/* 3200 ~ 4800 */}
      <Section3 scrollTop={scrollTop} />
      {/* 4800 ~ 6300 */}
      <Section4 scrollTop={scrollTop} />
      {/* 6300 ~ 8100 */}
      <Section5 scrollTop={scrollTop} />

      <div style={{ height: '100vh' }} />
    </div>
  );
}

export default App;
