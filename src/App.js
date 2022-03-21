import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Normalize } from 'styled-normalize';
import GlobalCSS from './globalStyle';

function App() {
  return (
    <>
      <BrowserRouter>
        <Normalize />
        <GlobalCSS />
        <Routes>
          <Route path="/search" />
          <Route path="/" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
