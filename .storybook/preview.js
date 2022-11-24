import { initialize, mswDecorator } from 'msw-storybook-addon';
import { BrowserRouter } from 'react-router-dom';
import { CosStyle, CosThemeProvider } from '@cos-ui/react';

// msw init
initialize();

export const decorators = [
  (Story) => {
    // const isDarkMode = false;
    // window.matchMedia &&
    // window.matchMedia('(prefers-color-scheme: dark)').matches;

    return (
      <CosThemeProvider>
        <CosStyle />
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </CosThemeProvider>
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
