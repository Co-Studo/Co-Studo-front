import { ThemeProvider } from 'styled-components';

import Routes from '@pages/Routes';
import GlobalStyle from '@theme/GlobalStyle';
import { darkTheme, lightTheme } from '@theme/theme';

const App: React.FC = () => {
  // const isDarkMode =
  //   window.matchMedia &&
  //   window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDarkMode = false;

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
