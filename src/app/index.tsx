import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import Light from './styles/themes/light';
import Routes from './routes';

const App: React.FC = () => (
  <ThemeProvider theme={Light}>
    <GlobalStyle />
    <Routes />
  </ThemeProvider>
);

export default App;
