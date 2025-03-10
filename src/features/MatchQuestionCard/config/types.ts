import { Answer, GivenVariant, VariantAnswer } from '../../../shared/types'

export type MatchQuestionCardProps = {
  isLastCard: boolean
  onNextClick: () => void
  question: string
  variants: VariantAnswer[]
  given?: GivenVariant[] | null
  data?: Answer
  isLoading: boolean
  onSubmit: () => void
  setUserTotalAnswers: React.Dispatch<React.SetStateAction<number[]>>
}
