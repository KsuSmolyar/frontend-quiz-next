import { Answer, QuestionCardType, VariantAnswer } from '../../../shared/types'

export type VariantsQuestionCardBodyProps = {
  type: QuestionCardType
  variants: VariantAnswer[]
  data?: Answer | null
  isLoading: boolean
}
export type VariantsQuestionCardProps = VariantsQuestionCardBodyProps & {
  isLastCard: boolean
  onNextClick: () => void
  question: string
  onSubmit: () => void
  setUserTotalAnswers: React.Dispatch<React.SetStateAction<number[]>>
}
