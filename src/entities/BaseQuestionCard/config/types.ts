import { Answer } from '../../../shared/types'

export type QuestionCardProps = {
  isLastCard: boolean
  question: string
  onNextClick: () => void
  data?: Answer | null
  onSubmit: () => void
  isLoading: boolean
  setUserTotalAnswers: React.Dispatch<React.SetStateAction<number[]>>
}

export type BaseQuestionCardProps = QuestionCardProps & {
  handleChangeForm?: (e: React.FormEvent<HTMLFormElement>) => void
  isBtnDisabled: boolean
  cardBodySlot: React.ReactElement
  matchVariantsSlot?: React.ReactElement
  setBtnDisabled?: () => void
  userAnswersFromMatch?: number[]
}
