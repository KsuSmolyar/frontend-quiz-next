'use client'
import classNames from 'classnames'
import styles from '../Header.module.css'
import { Dropdown } from '@/shared/ui/Dropdown'
import Link from 'next/link'
import { Logo } from '@/shared/ui/Logo'
import { ThemeToggler } from '@/entities/ThemeToggler'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={classNames(styles.headerContainer, 'container')}>
        <Link className={styles.headerLogoBlock} href={'/'}>
          <Logo />
          <h2 className={styles.headerTitle}>FrontendQuiz</h2>
        </Link>

        {/* <Btn>Ru Eng</Btn> */}
        <div className={styles.headerTogglers}>
          {/* <LanguageToggler /> */}
          <ThemeToggler />
          <Dropdown label={'Ru'} variant="outline">
            <ul className={styles.dropdownContent}>
              <li className={styles.dropdownContentItem}>Ru</li>
              <li className={styles.dropdownContentItem}>En</li>
            </ul>
          </Dropdown>
        </div>
      </div>
    </header>
  )
}
