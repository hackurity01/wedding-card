import React from 'react';

import './App.css';
import { Section1 } from 'src/sections/Section1';
import { Section2 } from 'src/sections/Section2';
import { useScroll } from 'src/lib/useScroll';

function App() {
  const { scrollTop } = useScroll();
  return (
    <div className="App" style={{ marginBottom: '1000px' }}>
      <Section1 scrollTop={scrollTop} />
      <Section2 scrollTop={scrollTop} />

      <div style={{ height: '100vh' }} />
    </div>
  );
}

export default App;
