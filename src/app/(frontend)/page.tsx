import React from 'react'
import './styles.css'
import { ThemeList } from '@/entities/ThemeList'
import { getAppPayload } from '@/shared/utils'

export default async function HomePage() {
  const payload = await getAppPayload()
  const { docs } = await payload.find({
    collection: 'Themes',
  })

  return (
    <div className={'main container'}>
      <h1 className={'title'}>Темы вопросов</h1>
      <ThemeList themeList={docs} />
    </div>
  )
}
