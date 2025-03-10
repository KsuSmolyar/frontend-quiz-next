import Image from 'next/image'
import { ThemeCardProps } from '../config/types'
import styles from '../ThemeCard.module.css'

export const ThemeCard = ({ id, title, description, count }: ThemeCardProps) => {
  return (
    <article className={styles.themeCard} id={id}>
      <div className={styles.themeCardContainer}>
        <Image
          className={styles.themeCardImg}
          src={`/icon-${title.toLowerCase()}.png`}
          alt={`логотип ${title}`}
          width={100}
          height={100}
        />
        <p className={styles.themeCardTitle}>{title}</p>
      </div>
      <div className={styles.themeCardContent}>
        <p>{description}</p>
        <span>Количество вопросов: {count}</span>
      </div>
    </article>
  )
}
