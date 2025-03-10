import { Answer, QuestionCardType, VariantAnswer } from "../../../shared/types"

export type VariantsQuestionCardBodyProps = {
    type: QuestionCardType
    variants: VariantAnswer[]
    data?: Answer
    isLoading: boolean
}

export type VariantsQuestionCardProps = {
    variants: VariantAnswer[]
    type: QuestionCardType
    isLastCard: boolean
    onNextClick: () => void
    question: string
    data?: Answer
    isLoading: boolean
    onSubmit: () => void
    setUserTotalAnswers: React.Dispatch<React.SetStateAction<number[]>>
}
