import { memo } from 'react'
import styles from '../Btn.module.css'
import { BtnProps } from '../config/types'
import classNames from 'classnames'

export const Btn = memo(function Btn({
  children,
  variant = 'primary',
  onClick,
  className,
  ...props
}: BtnProps) {
  const classes = classNames(styles.btn, className, {
    [styles.transparent]: variant === 'transparent',
    [styles.primary]: variant === 'primary',
  })
  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  )
})
