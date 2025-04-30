import classNames from 'classnames'
import { ProgressBarProps } from '../config/types'
import styles from '../progressBar.module.css'
import { useTranslations } from 'next-intl'

export const ProgressBar = ({ totalQuestions, solvedQuestions }: ProgressBarProps) => {
  const progressItems = Array.from({ length: totalQuestions })
  const t = useTranslations('ThemePage')
  return (
    <div className={styles.progressBar}>
      <h3 className={styles.progressBarTitle}>
        {t('progressBarText')} {solvedQuestions} {t('progressBarTextTwo')} {totalQuestions}
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
