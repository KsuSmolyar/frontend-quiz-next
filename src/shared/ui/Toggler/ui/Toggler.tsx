import classNames from 'classnames'
import { TogglerProps } from '../config/types'
import styles from '../toggler.module.css'

export const Toggler = ({
  value,
  onChange,
  id,
  className,
  slideClassName,
  waveClassName,
}: TogglerProps) => {
  return (
    <label className={classNames(styles.toggler, className)} htmlFor={id}>
      <input
        className={styles.togglerInput}
        id={id}
        type="checkbox"
        onClick={onChange}
        checked={value}
        readOnly
      />
      <span className={classNames(styles.togglerSlider, slideClassName)} />
      <span className={classNames(styles.togglerWave, waveClassName)} />
    </label>
  )
}
