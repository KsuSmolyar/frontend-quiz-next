// import { Back } from "@/shared/ui/Back"
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
    <div className={'main container'}>
      {/* <Back text={"На главную"} /> */}
      <h1 className={'title'}>{theme && theme.slice(0, 1).toUpperCase() + theme.slice(1)} QUIZ</h1>
      <QuestionCards themesData={docs} theme={theme} />
    </div>
  )
}
