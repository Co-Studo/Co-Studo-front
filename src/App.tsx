import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@theme/GlobalStyle';
import { darkTheme, lightTheme } from '@theme/theme';

const App: React.FC = () => {
  const isDarkMode =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <h1>Hello World</h1>
    </ThemeProvider>
  );
};

export default App;
