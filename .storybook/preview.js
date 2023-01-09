import { addDecorator } from '@storybook/react';
import React from 'react';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
};

// const style = {
//   background:
//     'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(150,150,150, 0.05) 10px, rgba(150,150,150, 0.05) 20px)',
//   padding: '20px',
// };

// import GlobalStyle from '../src/theme/global-styles';
import { UIThemeProvider } from '../storybook';

// addDecorator((story) => (
//   <ThemeProvider theme={theme}>
//     <SymbolDefsSVG />
//     <GlobalStyle />
//     <div>
//       {story()}
//     </div>
//   </ThemeProvider>
// ));
addDecorator((story) => (
  <UIThemeProvider>
    <div>{story()}</div>
  </UIThemeProvider>
));
