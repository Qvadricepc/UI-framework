// normalize default browser css
import 'normalize.css';
// add icomoon font support
import './public/assets/fonts/icomoon/style.css';
// add icomoon svg support
import './public/assets/svg/icomoon/style.css';
// TODO: check if rollup compile it
import './public/assets/svg/icomoon/svgxuse';
// @ts-ignore
import DevSymbolDefsSVG, {
  ReactComponent as SymbolDefsSVG,
  // @ts-ignore
} from './public/assets/svg/icomoon/symbol-defs.svg';
// // connect custom fonts
import './public/assets/fonts/dmsans/style.css';
import { GlobalStyles as Styles } from './src/theme/global-styles';
import { ThemeProvider } from 'styled-components';
import { useTheme as useAppTheme } from './src/theme/use-theme';
// import { OToast as Toast } from './src/common/components/o-toast'
import React from 'react';

export const UIThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const SVGDefs = SymbolDefsSVG || DevSymbolDefsSVG;
  const { theme } = useAppTheme();

  return (
    <ThemeProvider theme={theme}>
      <SVGDefs />
      <Styles />
      {children}
      {/*<Toast />*/}
    </ThemeProvider>
  );
};
