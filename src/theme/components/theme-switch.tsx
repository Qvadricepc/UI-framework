import { setTheme, useTheme } from '../use-theme'
import { OIcon } from '../../common/components/o-icon'
import { OButton } from '../../common/components/o-button'
import React from 'react'
import {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps
} from 'styled-system'
import { TSize } from '../../common/components/o-button/types.button'
import { EThemeVariant, TTheme } from '../theme'

type TProps = {
  size?: TSize
} & LayoutProps &
SpaceProps &
FlexboxProps &
BorderProps &
PositionProps &
ColorProps<TTheme>
export const ThemeSwitch: React.FC<TProps> = (props) => {
  const { theme } = useTheme()

  return (
    <OButton
      variant="secondary"
      onClick={() => setTheme(theme.id === 'light' ? EThemeVariant.dark : EThemeVariant.light)}
      icon={<OIcon name={theme.id === EThemeVariant.light ? 'sun' : 'moon'} />}
      {...props}
    />
  )
}
