import './app.css';
import { CosStyle, CosThemeProvider } from '@cos-ui/react';

import { useMe } from '@fbase/auth';
import useLocalStorage from '@hooks/useLocalStorage';
import Routes from '@pages/Routes';

const App = () => {
  // const isDarkMode =
  //   window.matchMedia &&
  //   window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [isLogin] = useLocalStorage('isLogin', false);
  const user = useMe();

  return isLogin && !user ? null : (
    <CosThemeProvider>
      <CosStyle />
      <Routes />
    </CosThemeProvider>
  );
};

export default App;
