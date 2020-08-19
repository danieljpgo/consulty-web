import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Light from './styles/themes/light';
import Routes from './routes';

const App: React.FC = () => (
  <ThemeProvider theme={Light}>
    <GlobalStyle />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
