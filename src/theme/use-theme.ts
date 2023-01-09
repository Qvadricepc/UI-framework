import { useEffect, useState } from 'react'

import {
  EThemeVariant,
  themeDark as ThemeOndefyDark,
  themeLight as ThemeOndefyLight,
  TTheme
} from './theme'
import { THEME_COOKIE_KEY } from './constants'
import { useCookie } from 'react-use'
import { useCookies } from 'react-cookie'

const themeStateManager = {
  // variant: typeof window !== 'undefined' ? localStorage.getItem(THEME_KEY) || 'light' : 'light',
  subscriptions: [] as Array<(variant: EThemeVariant) => any>,
  next (val: EThemeVariant) {
    this.subscriptions.forEach((sub) => {
      sub(val)
    })
  },
  subscribe (callback: (variant: EThemeVariant) => any) {
    this.subscriptions.push(callback)
    const index = this.subscriptions.length - 1

    return () => {
      themeStateManager.subscriptions.splice(index, 1)
    }
  }
}
export const setTheme = (variant: EThemeVariant) => {
  themeStateManager.next(variant)
}

export const useTheme = (key?: EThemeVariant) => {
  const [cookies, updateCookie] = useCookies()
  const [theme, setTheme] = useState<TTheme>(
    (key || cookies[THEME_COOKIE_KEY]) === EThemeVariant.dark ? ThemeOndefyDark : ThemeOndefyLight
  )

  useEffect(() => {
    const unsub = themeStateManager.subscribe((variant) => {
      setTheme(variant === EThemeVariant.dark ? ThemeOndefyDark : ThemeOndefyLight)
      updateCookie(THEME_COOKIE_KEY, variant, { path: '/' })
    })

    return () => {
      unsub()
    }
  }, [])

  return {
    theme
  }
}
export const useThemeProvider = (key?: EThemeVariant) => {
  const [cookie, updateCookie] = useCookie(THEME_COOKIE_KEY)
  const [theme, setTheme] = useState<TTheme>(
    (key || cookie) === EThemeVariant.dark ? ThemeOndefyDark : ThemeOndefyLight
  )

  useEffect(() => {
    const unsub = themeStateManager.subscribe((variant) => {
      setTheme(variant === EThemeVariant.dark ? ThemeOndefyDark : ThemeOndefyLight)
      updateCookie(variant, { path: '/' })
    })

    return () => {
      unsub()
    }
  }, [])

  return {
    theme
  }
}
