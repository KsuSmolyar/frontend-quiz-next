import { Dropdown } from '@/shared/ui/Dropdown'
import styles from '../LocaleToggler.module.css'
import { useRef, useState, useTransition } from 'react'
// import { useRouter } from 'next/router'
import { usePathname, useRouter } from '@/i18n/navigation'
import { useParams } from 'next/navigation'
import { Locale } from 'next-intl'

export const LocaleToggler = () => {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()
  const params = useParams<{ locale: Locale }>()
  console.log('params', params)

  const [label, setLabel] = useState<Locale>(params?.locale || 'ru')
  const ref = useRef<{ closeDropdown: () => void }>(null)

  const handleClick = (locale: Locale) => {
    setLabel(locale)
    ref.current?.closeDropdown()
    const nextLocale = locale
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale },
      )
    })
  }

  return (
    <Dropdown label={label} variant="outline" ref={ref}>
      <ul className={styles.dropdownContent}>
        <li className={styles.dropdownContentItem}>
          <button
            className={styles.toggleBtn}
            onClick={() => handleClick('ru')}
            disabled={isPending}
          >
            Ru
          </button>
        </li>
        <li className={styles.dropdownContentItem}>
          <button
            className={styles.toggleBtn}
            onClick={() => handleClick('en')}
            disabled={isPending}
          >
            En
          </button>
        </li>
      </ul>
    </Dropdown>
  )
}
