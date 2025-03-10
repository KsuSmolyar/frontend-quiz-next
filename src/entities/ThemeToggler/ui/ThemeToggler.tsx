// import { useThemeContext } from '../../../shared/contexts'
// import { themes } from '../../../shared/contexts/ThemeContext'
import { Toggler } from '../../../shared/ui/Toggler/ui/Toggler'
import styles from '../themeToggler.module.css'

export const ThemeToggler = () => {
  //   const { theme, handleSetTheme } = useThemeContext()

  const handleChange = () => {
    //TODO
    console.log('handleChange')
    // if (theme === themes.light) handleSetTheme(themes.dark)
    // if (theme === themes.dark) handleSetTheme(themes.light)
  }
  return (
    <Toggler
      className={styles.togglerTheme}
      slideClassName={styles.togglerThemeSlider}
      waveClassName={styles.togglerThemeWave}
      id={'themeToggler'}
      onChange={handleChange}
      value={true}
    />
  )
}
