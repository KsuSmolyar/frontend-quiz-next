// import { useGetThemeQuery } from '../shared/api/ThemesAPI'
// import { Back } from "../shared/ui/Back"
// import { useEffect, useState } from 'react'
// import { Loader } from '@/shared/ui/Loader'
// import { ProgressBar } from '@/shared/ui/ProgressBar'
// import { QuestionCards } from '@/widgets/QuestionCards'
// import { useParams } from 'next/navigation'
// import { useParams } from 'next/navigation'

import { getAppPayload } from '@/shared/utils'
import { QuestionCards } from '@/widgets/QuestionCards'

export default async function ThemePage({
  params,
}: {
  params: Promise<{ theme: 'javascript' | 'react' }>
}) {
  const { theme } = await params
  const payload = await getAppPayload()
  const { docs } = await payload.find({
    collection: theme,
    pagination: false,
  })

  return (
    <main className={'main container'}>
      {/* <Back text={"На главную"} /> */}
      <h1 className={'title'}>{theme && theme.slice(0, 1).toUpperCase() + theme.slice(1)} QUIZ</h1>
      {/* {isError && <h2>Произошла ошибка</h2>} */}
      <QuestionCards themesData={docs} theme={theme} />
    </main>
  )
}
