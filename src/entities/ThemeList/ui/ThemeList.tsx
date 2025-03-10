'use client'
import { ThemeListProps } from '../config/types'
import styles from '../ThemeList.module.css'
import { ThemeCard } from '../../../shared/ui/ThemeCard'
import Link from 'next/link'

import { useTheme } from '@payloadcms/ui'

export const ThemeList = ({ themeList }: ThemeListProps) => {
  const { autoMode, setTheme, theme } = useTheme()

  return (
    <ul className={styles.themeList}>
      {themeList.map((theme, index) => {
        return (
          <li key={index}>
            <Link className={styles.themeListLink} href={`${theme.title.toLowerCase()}`}>
              <ThemeCard {...theme} />
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
