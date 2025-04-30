'use client'
import { ThemeListProps } from '../config/types'
import styles from '../ThemeList.module.css'
import { ThemeCard } from '../../../shared/ui/ThemeCard'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export const ThemeList = ({ themeList }: ThemeListProps) => {
  const t = useTranslations('IndexPage')
  return (
    <>
      <h1 className={'title'}>{t('title')}</h1>
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
    </>
  )
}
