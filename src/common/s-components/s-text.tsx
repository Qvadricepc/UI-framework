import { TTheme, styled } from '../../theme/theme'
import React, { AllHTMLAttributes } from 'react'
import { css, useTheme } from 'styled-components'
import {
  background,
  BackgroundProps,
  color,
  ColorProps,
  compose,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  variant
} from 'styled-system'

interface TSTextOwnProps {
  type?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'small'
  variant?: 'default' | 'alt'
  children: React.ReactNode
}

type AllProps = AllHTMLAttributes<any>

// https://styled-system.com/api
type TSTextStyledProps = TSTextOwnProps &
AllProps &
TypographyProps &
SpaceProps &
LayoutProps &
PositionProps &
BackgroundProps &
ColorProps<TTheme>

// general html props
export type TSTextProps = TSTextOwnProps &
TSTextStyledProps &
(
  | JSX.IntrinsicElements['span']
  | JSX.IntrinsicElements['h1']
  | JSX.IntrinsicElements['h2']
  | JSX.IntrinsicElements['h3']
  | JSX.IntrinsicElements['h4']
  | JSX.IntrinsicElements['h5']
  | JSX.IntrinsicElements['h6']
  | JSX.IntrinsicElements['p']
  | JSX.IntrinsicElements['small']
)

// export const SText: StyledComponent<'span', TTheme, TSTextProps, never> =
//   styled('span')((props) => ({
//     ...compose(typography, space, color, layout, background, position)(props),
//     // ...transformMethod(props),
//     // ...cursorMethod(props),
//   }));

const variants = (props: TSTextProps & { theme: TTheme }) => css`
  ${variant({
    // sizes: {
    //   sm: '14px'
    // }
    variants: {
      alt: {
        color: props.theme.colors.accent
      }
    }
  })}
`

const fontWeight = (props: TSTextProps & { theme: TTheme }) => css`
  ${!props.fontWeight
    ? null
    : 'font-weight: ' + String(props.fontWeight === 'semibold' ? 500 : props.fontWeight) + ';'}
`

const mixin = compose(typography, space, color, layout, background, position)

const SSpan = styled.span<TSTextProps>(
  (props: any) => css`
    ${mixin(props)}
    ${variants(props)}
    ${fontWeight(props)}
  `
)

const SSmall = styled.small<TSTextProps>(
  (props: any) => css`
    ${mixin(props)}
    ${variants(props)}
    ${fontWeight(props)}
  `
)

const SH1 = styled.h1<TSTextProps>(
  (props: any) =>
    css`
      ${mixin(props)}
      ${variants(props)}
      ${fontWeight(props)}
    `
)
const SH2 = styled.h2<TSTextProps>(
  (props: any) => css`
    ${mixin(props)}
    ${variants(props)}
    ${fontWeight(props)}
  `
)
const SH3 = styled.h3<TSTextProps>(
  (props: any) =>
    css`
      ${mixin(props)}
      ${variants(props)}
      ${fontWeight(props)}
    `
)
const SH4 = styled.h4<TSTextProps>(
  (props: any) =>
    css`
      ${mixin(props)}
      ${variants(props)}
      ${fontWeight(props)}
    `
)
const SH5 = styled.h5<TSTextProps>(
  (props: any) =>
    css`
      ${mixin(props)}
      ${variants(props)}
      ${fontWeight(props)}
    `
)
const SH6 = styled.h6<TSTextProps>(
  (props: any) =>
    css`
      ${mixin(props)}
      ${variants(props)}
      ${fontWeight(props)}
    `
)
const SP = styled.p<TSTextProps>(
  (props: any) =>
    css`
      ${mixin(props)}
      ${variants(props)}
      ${fontWeight(props)}
    `
)

export const SText: React.FC<TSTextProps> = ({ type, children, color, ...rest }) => {
  const theme = useTheme() as TTheme

  const allProps = Object.assign(rest as unknown as TSTextProps, {
    color: color || theme.colors.typo
  })

  if (type === 'h1') {
    return React.createElement(SH1, allProps, children)
  }
  if (type === 'h2') {
    return React.createElement(SH2, allProps, children)
  }
  if (type === 'h3') {
    return React.createElement(SH3, allProps, children)
  }
  if (type === 'h4') {
    return React.createElement(SH4, allProps, children)
  }
  if (type === 'h5') {
    return React.createElement(SH5, allProps, children)
  }
  if (type === 'h6') {
    return React.createElement(SH6, allProps, children)
  }
  if (type === 'p') {
    return React.createElement(SP, allProps, children)
  }
  if (type === 'small') {
    return React.createElement(SSmall, allProps, children)
  }

  return React.createElement(SSpan, allProps, children)
}

SText.defaultProps = {
  type: 'span',
  variant: 'default'
}
