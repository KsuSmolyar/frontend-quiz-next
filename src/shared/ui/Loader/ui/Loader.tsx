import classNames from 'classnames'
import styles from '../loader.module.css'
import { LoaderProps } from '../config/types'
import Image from 'next/image'

export const Loader = ({ className }: LoaderProps) => {
  return (
    <div className={classNames(styles.loader, className)}>
      <Image
        className={styles.loaderImg}
        src={'/api/media/file/tube-spinner.svg'}
        alt={'лоадер'}
        width={100}
        height={100}
      />
    </div>
  )
}
