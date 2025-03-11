import { ThemeModes, themes } from '../types'
export const getTheme = (): ThemeModes => {
  const theme = window?.localStorage?.getItem('theme') as ThemeModes
  if (Object.values(themes).includes(theme)) return theme

  const userMedia = window.matchMedia('(prefers-color-scheme: light)')
  if (userMedia.matches) return themes.light

  return themes.dark
}
