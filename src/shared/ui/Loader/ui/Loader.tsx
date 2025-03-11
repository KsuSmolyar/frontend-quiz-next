import classNames from 'classnames'
import styles from '../loader.module.css'
import { LoaderProps } from '../config/types'
import { TubeSpinner } from '../../Icons'

export const Loader = ({ className }: LoaderProps) => {
  return (
    <div className={classNames(styles.loader, className)}>
      <TubeSpinner className={styles.loaderIcon} />
    </div>
  )
}
