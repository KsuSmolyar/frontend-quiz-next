import { memo } from 'react'
import { RadioBtnProps } from '../config/types'
import styles from '../RadioBtn.module.css'
import classNames from 'classnames'

export const RadioBtn = memo(function RadioBtn({
  labelText,
  name,
  isCorrect,
  isWrong,
  ...props
}: RadioBtnProps) {
  return (
    <label
      className={classNames(styles.radioBtn, {
        [styles.correct]: isCorrect,
        [styles.wrong]: isWrong,
      })}
    >
      <input className={styles.radioBtnInput} type="radio" name={name} {...props} />
      <span className={styles.radioBtnCustomRadio} />
      {labelText}
    </label>
  )
})
