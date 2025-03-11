import { useState } from 'react'
import styles from '../dropdown.module.css'
import classNames from 'classnames'
import { ArrowDown } from '../../Icons'
import { useOutsideClick } from '@/shared/hooks/useOutsideClick'
import { DropdownProps } from '../config/types'

export const Dropdown = ({ children, label, variant }: DropdownProps) => {
  const menuRef = useOutsideClick<HTMLDivElement>(() => setIsVisible(false))
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const classes = classNames(styles.dropdown, {
    [styles.outline]: variant === 'outline',
  })
  const handleClick = () => {
    setIsVisible((prev) => !prev)
  }

  return (
    <div className={classes} ref={menuRef}>
      <button
        className={classNames(styles.dropdownButton, isVisible ? styles.visible : '')}
        onClick={handleClick}
      >
        {label}
        <span className={styles.dropdownLabel}>
          <ArrowDown className={styles.dropdownArrow} />
        </span>
      </button>
      <div className={classNames(styles.dropdownContent, isVisible ? styles.visible : '')}>
        {children}
      </div>
    </div>
  )
}
