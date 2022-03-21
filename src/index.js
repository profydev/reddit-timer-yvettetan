import React from 'react';
import ReactDOM from 'react-dom';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import App from './App';
import theme from './theme';
import GlobalCSS from './globalStyle';

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalCSS />
      <App />
    </ThemeProvider>
  </>,
  document.getElementById('root'),
);
