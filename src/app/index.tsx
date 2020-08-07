import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import Light from './styles/themes/light';
// import Navigation from './common/layout/Navigation';
import Landing from './pages/Landing';

const App: React.FC = () => (
  <ThemeProvider theme={Light}>
    <GlobalStyle />
    <Landing />
    {/* <Navigation>
      <Landing />
    </Navigation> */}
  </ThemeProvider>
);

export default App;
