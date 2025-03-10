// import { getPayload } from 'payload'
import React from 'react'

// import config from '@/payload.config'
import './styles.css'
// import { Loader } from '@/shared/ui/Loader'
import { ThemeList } from '@/entities/ThemeList'
import { getAppPayload } from '@/shared/utils'

export default async function HomePage() {
  const payload = await getAppPayload()
  const { docs } = await payload.find({
    collection: 'Themes',
  })

  return (
    <main className={'main container'}>
      <h1 className={'title'}>Темы вопросов</h1>
      {/* {!docs && (
        <div className={'preloader'}>
          <Loader />
        </div>
      )} */}
      {/* {isError && <h2>Error occurred</h2>} */}
      <ThemeList themeList={docs} />
    </main>
  )
}
