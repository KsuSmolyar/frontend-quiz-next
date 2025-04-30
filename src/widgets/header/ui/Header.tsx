'use client'
import classNames from 'classnames'
import styles from '../Header.module.css'
import Link from 'next/link'
import { Logo } from '@/shared/ui/Logo'
import { ThemeToggler } from '@/entities/ThemeToggler'
import { LocaleToggler } from './LocaleToggler'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={classNames(styles.headerContainer, 'container')}>
        <Link className={styles.headerLogoBlock} href={'/'}>
          <Logo />
          <h2 className={styles.headerTitle}>FrontendQuiz</h2>
        </Link>
        <div className={styles.headerTogglers}>
          <ThemeToggler />
          <LocaleToggler />
        </div>
      </div>
    </header>
  )
}
