import { initialize, mswDecorator } from 'msw-storybook-addon';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '@theme/theme';
import GlobalStyle from '@theme/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';

// msw init
initialize();

export const decorators = [
  (Story) => {
    const isDarkMode = false;
    // window.matchMedia &&
    // window.matchMedia('(prefers-color-scheme: dark)').matches;

    return (
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </ThemeProvider>
    );
  },
  mswDecorator,
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
