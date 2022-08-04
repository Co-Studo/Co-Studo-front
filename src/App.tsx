import { ThemeProvider } from 'styled-components';

import LoginPage from '@pages/LoginPage';
import GlobalStyle from '@theme/GlobalStyle';
import { darkTheme, lightTheme } from '@theme/theme';

const App: React.FC = () => {
  const isDarkMode =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <LoginPage />
    </ThemeProvider>
  );
};

export default App;
