import { TTheme } from './theme'
import { createGlobalStyle } from 'styled-components'
import { globalTypography } from './global-typography'
import { globalEffects } from './global-effects'
import { globalTooltip } from './global-tooltip'

export const GlobalStyles = createGlobalStyle<{ theme: TTheme }>`
* {
  box-sizing: border-box;
}
${globalTypography};
${globalEffects};
${globalTooltip};

body {
  background-color: ${(p) => p.theme.colors.bg};
  color: ${(p) => p.theme.colors.typo};
  min-width: 390px;
}
`
