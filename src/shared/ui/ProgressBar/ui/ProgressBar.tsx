import classNames from 'classnames'
import { ProgressBarProps } from '../config/types'
import styles from '../progressBar.module.css'

export const ProgressBar = ({ totalQuestions, solvedQuestions }: ProgressBarProps) => {
  const progressItems = Array.from({ length: totalQuestions })
  return (
    <div className={styles.progressBar}>
      <h3 className={styles.progressBarTitle}>
        Решено {solvedQuestions} из {totalQuestions}
      </h3>
      <ul className={styles.progressBarList}>
        {progressItems.map((_, index) => {
          return (
            <li
              key={index}
              className={classNames(styles.progressBarItem, {
                [styles.solved]: index + 1 <= solvedQuestions,
              })}
            />
          )
        })}
      </ul>
    </div>
  )
}
