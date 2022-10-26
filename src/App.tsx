import './app.css';
import { ThemeProvider } from 'styled-components';

import { useMe } from '@fbase/auth';
import useLocalStorage from '@hooks/useLocalStorage';
import Routes from '@pages/Routes';
import GlobalStyle from '@styles/GlobalStyle';
import { darkTheme, lightTheme } from '@styles/theme';

const App: React.FC = () => {
  // const isDarkMode =
  //   window.matchMedia &&
  //   window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDarkMode = false;

  const [isLogin] = useLocalStorage('isLogin', false);
  const user = useMe();

  return isLogin && !user ? null : (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
