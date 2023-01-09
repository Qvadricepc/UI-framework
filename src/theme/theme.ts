// export const paletteDark = {
//   // https://www.figma.com/file/J2qdiNHN3rSjp8OsGqELqD/Ondefy-Lib-v.2?node-id=3%3A29
//   colors: {
//     typo: '#F5F5F5',
//     typo2: '#F5F5F5',
//     bg: '#161E25',
//     bg2: '#0D1216',
//     accent: '#7AD1BF',
//     accent2: '##25B0C3',
//   },
//   gradient: 'linear-gradient(97.76deg, #7AD1BF 0%, #25B0C4 100%)',
// };

import { createBreakpoint } from 'react-use'
import baseStyled, { ThemedStyledInterface } from 'styled-components'

export enum EThemeVariant {
  dark = 'dark',
  light = 'light',
}

export const paletteLight = {
  // https://www.figma.com/file/J2qdiNHN3rSjp8OsGqELqD/Ondefy-Lib-v.2?node-id=3%3A40
  colors: {
    typo: '#161E25',
    typo2: '#F5F5F5',
    bg: '#E7EAED',
    bg2: '#FFFFFF',
    bg3: '#D5D7DA',
    bg4: '#7F8488',
    bg5: '#BCC0C3',
    bg6: '#F5F7F9',
    accent: '#4EB9A3',
    accent2: '#28ABBA',
    error: '#E35656',
    hoverTransparent: 'rgba(238, 238, 238, 0.1)',
    inherit: 'inherit',
    transparent: 'transparent',
    networkArbitrum: 'rgb(52, 120, 246)',
    networkEthereum: 'rgb(90, 118, 228)',
    networkOptimism: 'rgb(255, 4, 32)',
    networkAvalanche: 'rgb(232, 65, 66)',
    networkBinanceSC: 'rgb(251, 218, 60)',
    networkPolygon: 'rgb(130, 71, 229)',
    networkFantom: 'rgb(26, 124, 228)',
    networkCelo: 'rgb(5, 224, 112)'
  },
  gradients: {
    default: 'linear-gradient(97.76deg, #4EB9A3 0%, #28ABBA 100%)',
    button: 'linear-gradient(-75deg, rgba(0, 0, 0, 0.6) 30%, #000 50%, rgba(0, 0, 0, 0.6) 70%)'
  },
  shadows: {
    typo2: '0px 0px 5px rgba(0, 0, 0, 0.25)',
    variant1: '0px 14px 30px rgba(68, 182, 170, 0.1)'
  }
}

export const paletteDark = {
  // https://www.figma.com/file/J2qdiNHN3rSjp8OsGqELqD/Ondefy-Lib-v.2?node-id=3%3A40
  colors: {
    typo: '#E7EAED',
    typo2: '#F5F5F5',
    bg: '#161E25',
    bg2: '#0D1216',
    bg3: '#D5D7DA',
    bg4: '#7F8488',
    bg5: '#BCC0C3',
    bg6: '#F5F7F9',
    hoverTransparent: 'rgba(238, 238, 238, 0.1)',
    accent: '#7AD1BF',
    accent2: '#25B0C3',
    error: '#E35656',
    inherit: 'inherit',
    transparent: 'transparent',
    networkArbitrum: 'rgb(52, 120, 246)',
    networkEthereum: 'rgb(90, 118, 228)',
    networkOptimism: 'rgb(255, 4, 32)',
    networkAvalanche: 'rgb(232, 65, 66)',
    networkBinanceSC: 'rgb(251, 218, 60)',
    networkPolygon: 'rgb(130, 71, 229)',
    networkFantom: 'rgb(26, 124, 228)',
    networkCelo: 'rgb(5, 224, 112)'
  },
  gradients: {
    default: 'linear-gradient(97.76deg, #7AD1BF 0%, #25B0C3 100%)',
    button: 'linear-gradient(-75deg, rgba(0, 0, 0, 0.6) 30%, #000 50%, rgba(0, 0, 0, 0.6) 70%)'
  },
  shadows: {
    typo2: '0px 0px 5px rgba(0, 0, 0, 0.25)',
    variant1: '0px 14px 30px rgba(68, 182, 170, 0.1)'
  }
}

// All font sizes are from our designs
// https://www.figma.com/file/J2qdiNHN3rSjp8OsGqELqD/Ondefy-Lib-v.2?node-id=3%3A99&t=FRLGmupGTn9Bq4IS-0
export enum EFontSizes {
  bodyS = '0.875rem',
  bodyM = '1rem',
  bodyL = '1.25rem',
  heading4 = '1.5rem',
  heading3 = '2rem',
  heading2 = '3rem',
  heading1 = '4rem',
  bodySMobile = '0.75rem',
  bodyMMobile = '0.9375rem',
  bodyLMobile = '1.125rem',
  heading4Mobile = '1.25rem',
  heading3Mobile = '1.5rem',
  heading2Mobile = '1.75rem',
  heading1Mobile = '2.25rem',
}

export enum ESpacing {
  // https://www.figma.com/file/J2qdiNHN3rSjp8OsGqELqD/Ondefy-Lib-v.2?node-id=3%3A4258
  xs5 = '4px',
  xs4 = '8px',
  xs3 = '12px',
  xs2 = '16px',
  xs = '20px',
  sm = '24px',
  md = '32px',
  lg = '40px',
  xl = '48px',
  xl2 = '64px',
  xl3 = '80px',
  xl4 = '100px',
}

// https://mui.com/material-ui/customization/breakpoints/#default-breakpoints
export enum EBreakpoints {
  xs = '0px',
  sm = '600px',
  md = '900px',
  lg = '1200px',
  xl = '1536px',
}

// https://styled-system.com/responsive-styles/
const spacing: string[] & {
  xs5: string
  xs4: string
  xs3: string
  xs2: string
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  xl2: string
  xl3: string
  xl4: string
} = Object.assign(
  [
    ESpacing.xs5,
    ESpacing.xs4,
    ESpacing.xs3,
    ESpacing.xs2,
    ESpacing.xs,
    ESpacing.sm,
    ESpacing.md,
    ESpacing.lg,
    ESpacing.xl,
    ESpacing.xl2,
    ESpacing.xl3,
    ESpacing.xl4
  ],
  {
    xs5: ESpacing.xs5,
    xs4: ESpacing.xs4,
    xs3: ESpacing.xs3,
    xs2: ESpacing.xs2,
    xs: ESpacing.xs,
    sm: ESpacing.sm,
    md: ESpacing.md,
    lg: ESpacing.lg,
    xl: ESpacing.xl,
    xl2: ESpacing.xl2,
    xl3: ESpacing.xl3,
    xl4: ESpacing.xl4
  }
)

// https://styled-system.com/responsive-styles/
const breakpoints: string[] & {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
} = Object.assign([EBreakpoints.sm, EBreakpoints.md, EBreakpoints.lg, EBreakpoints.xl], {
  xs: EBreakpoints.xs,
  sm: EBreakpoints.sm,
  md: EBreakpoints.md,
  lg: EBreakpoints.lg,
  xl: EBreakpoints.xl
})

export const breakpoint = {
  // we could remove 'screen and' but it will causes some warnings regarding styling visuals in styled-components
  xs: `all and (min-width: ${breakpoints.xs})`,
  sm: `all and (min-width: ${breakpoints.sm})`,
  md: `all and (min-width: ${breakpoints.md})`,
  lg: `all and (min-width: ${breakpoints.lg})`,
  xl: `all and (min-width: ${breakpoints.xl})`
}

const useBreakpointName = createBreakpoint({
  xs: parseInt(EBreakpoints.xs, 10),
  sm: parseInt(EBreakpoints.sm, 10),
  md: parseInt(EBreakpoints.md, 10),
  lg: parseInt(EBreakpoints.lg, 10),
  xl: parseInt(EBreakpoints.xl, 10)
})

export const useBreakpoint = () => {
  const breakpoint = useBreakpointName()

  // console.log(breakpoint)
  return {
    xs: breakpoint === 'xs',
    sm: breakpoint === 'sm',
    md: breakpoint === 'md',
    lg: breakpoint === 'lg',
    xl: breakpoint === 'xl'
  }
}

/*
 * When you modify the fields inside theme object
 * https://medium.com/rbi-tech/theme-with-styled-components-and-typescript-209244ec15a3
 * update declare module 'styled-components' inside reac-app.env.d.ts file in the root
 * */
export const themeLight = {
  id: 'light',
  breakpoints,
  spacing,
  colors: paletteLight.colors,
  gradients: paletteLight.gradients,
  shadows: paletteLight.shadows
}

export const themeDark = {
  id: 'dark',
  breakpoints,
  spacing,
  colors: paletteDark.colors,
  gradients: paletteDark.gradients,
  shadows: paletteDark.shadows
}

// https://github.com/styled-components/styled-components/issues/1589#issuecomment-435613664
export type TTheme = typeof themeLight
export const styled = baseStyled as ThemedStyledInterface<TTheme>
export type TThemed<T> = { theme: TTheme } & T
