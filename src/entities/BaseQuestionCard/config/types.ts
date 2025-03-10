import { Answer } from "../../../shared/types"

export type BaseQuestionCardProps = {
    isLastCard: boolean
    question: string
    handleChangeForm?: (e:React.FormEvent<HTMLFormElement>) => void
    onNextClick: () => void
    data?: Answer 
    isBtnDisabled: boolean
    cardBodySlot: React.ReactElement
    matchVariantsSlot?: React.ReactElement
    onSubmit: () => void
    isLoading: boolean
    setBtnDisabled?: () => void
    setUserTotalAnswers: React.Dispatch<React.SetStateAction<number[]>>
    userAnswersFromMatch?: number[]
  }
