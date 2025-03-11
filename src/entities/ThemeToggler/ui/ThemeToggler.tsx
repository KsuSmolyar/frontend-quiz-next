import { ThemeModes, themes } from '@/shared/types'
import { Toggler } from '../../../shared/ui/Toggler/ui/Toggler'
import styles from '../themeToggler.module.css'
import { useEffect, useState } from 'react'
import { getTheme } from '@/shared/utils/getTheme'

export const ThemeToggler = () => {
  const [theme, setTheme] = useState<ThemeModes>(getTheme)

  const handleChange = () => {
    if (theme === themes.light) setTheme(themes.dark)
    if (theme === themes.dark) setTheme(themes.light)
  }

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <Toggler
      className={styles.togglerTheme}
      slideClassName={styles.togglerThemeSlider}
      waveClassName={styles.togglerThemeWave}
      id={'themeToggler'}
      onChange={handleChange}
      value={theme === themes.dark}
    />
  )
}
