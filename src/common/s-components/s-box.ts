import { TTheme } from '../../theme/theme'
import { Property } from 'csstype'
import { AllHTMLAttributes } from 'react'
import styled, { StyledComponent, ThemedStyledProps } from 'styled-components'
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  flexbox,
  FlexProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  typography,
  TypographyProps
} from 'styled-system'

type TransformProps = ThemedStyledProps<any, any> & {
  transform?: Property.Transform
}

const transformMethod = ({ transform, ...rest }: TransformProps) => {
  return {
    transform,
    ...rest
  }
}

type CursorProps = ThemedStyledProps<any, any> & {
  cursor?: Property.Cursor
}

const cursorMethod = ({ cursor, ...rest }: CursorProps) => {
  return {
    cursor,
    ...rest
  }
}

type HTMLDivProps = JSX.IntrinsicElements['div'] &
AllHTMLAttributes<any> & {
  children: React.ReactNode
}
// type HTMLDivProps = StyledComponent<'div', TTheme, any>;

// https://styled-system.com/api
export type TSBoxProps = HTMLDivProps &
TypographyProps &
SpaceProps &
GridProps &
FlexProps &
LayoutProps &
PositionProps &
BackgroundProps &
BorderProps &
ColorProps<TTheme> &
TransformProps &
CursorProps

export const SBox: StyledComponent<'div', TTheme, TSBoxProps, never> = styled('div')((props) => ({
  ...compose(typography, space, color, layout, flexbox, grid, background, border, position)(props),
  ...transformMethod(props),
  ...cursorMethod(props)
}))

export const SFlexbox: StyledComponent<'div', TTheme, TSBoxProps, never> = styled(SBox)`
  display: flex;
`

export const SGridbox: StyledComponent<'div', TTheme, TSBoxProps, never> = styled(SBox)`
  display: grid;
`
