import React from 'react'
import './styles.css'
import { ThemeList } from '@/entities/ThemeList'
import { getAppPayload } from '@/shared/utils'
import { hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'

export default async function HomePage(props: { params: Promise<{ locale: string }> }) {
  const { params } = props
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  const payload = await getAppPayload()
  const { docs } = await payload.find({
    collection: 'Themes',
    where: { locale: { equals: locale } },
  })

  return (
    <div className={'main container'}>
      <ThemeList themeList={docs} />
    </div>
  )
}
