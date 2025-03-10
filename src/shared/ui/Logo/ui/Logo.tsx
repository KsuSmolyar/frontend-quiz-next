import styles from '../logo.module.css'
import Image from 'next/image'

export const Logo = () => {
  return (
    <Image
      className={styles.logo}
      src={'/api/media/file/learn.png'}
      alt={'лупа'}
      width={24}
      height={24}
    />
  )
}
