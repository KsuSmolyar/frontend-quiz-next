import styles from '../logo.module.css'
import Image from 'next/image'

export const Logo = () => {
  return <Image className={styles.logo} src={'/learn.png'} alt={'лупа'} width={24} height={24} />
}
