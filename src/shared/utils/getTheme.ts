import { ThemeModes, themes } from '../types'
export const getTheme = (): ThemeModes => {
  if (typeof window === 'undefined') {
    return themes.dark
  }
  const theme = window?.localStorage?.getItem('theme') as ThemeModes
  if (Object.values(themes).includes(theme)) return theme

  const userMedia = window.matchMedia('(prefers-color-scheme: light)')
  if (userMedia.matches) return themes.light

  return themes.dark
}
