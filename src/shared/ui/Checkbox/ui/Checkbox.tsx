import classNames from 'classnames'
import styles from '../Checkbox.module.css'
import { CheckboxProps } from '../config/types'

export const Checkbox = ({ labelText, isCorrect, isWrong, ...props }: CheckboxProps) => {
  return (
    <label
      className={classNames(styles.checkbox, {
        [styles.correct]: isCorrect,
        [styles.wrong]: isWrong,
      })}
    >
      <input className={styles.checkboxInput} type={'checkbox'} {...props} />
      <span>{labelText}</span>
    </label>
  )
}
