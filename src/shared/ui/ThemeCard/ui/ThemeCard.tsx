import Image from 'next/image'
import { ThemeCardProps } from '../config/types'
import styles from '../ThemeCard.module.css'
import { useTranslations } from 'next-intl'

export const ThemeCard = ({ id, title, description, count }: ThemeCardProps) => {
  const t = useTranslations('IndexPage')
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
        <span>
          {t('themeCardTitle')}: {count}
        </span>
      </div>
    </article>
  )
}
