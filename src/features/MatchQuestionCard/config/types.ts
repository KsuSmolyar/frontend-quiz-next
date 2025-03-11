import { QuestionCardProps } from '@/entities/BaseQuestionCard/config/types'
import { GivenVariant, VariantAnswer } from '../../../shared/types'

export type MatchQuestionCardProps = QuestionCardProps & {
  variants: VariantAnswer[]
  given?: GivenVariant[] | null
}

export type MatchQuestionCardBodyProps = {
  given?: GivenVariant[] | null
  onRemoveVariant: (variant: VariantAnswer) => void
  setUserAnswer: (questionIndex: number, answerIndex: number) => void
  onAddVariant: (variant: VariantAnswer) => void
  answers?: number[]
  userAnswers: number[]
  isCanDrag: boolean
}

export type MatchQuestionCardDragItemProps = {
  data: string
  clearDraggedElement?: () => void
  index?: string | null
  isCanDrag?: boolean
}

export type MatchQuestionCardDropItemProps = {
  onRemoveVariant: (variant: VariantAnswer) => void
  index: number
  setUserAnswer: (questionIndex: number, answerIndex: number) => void
  onAddVariant: (variant: VariantAnswer) => void
  isCorrect: boolean | undefined
  isCanDrag: boolean
}

export type MatchQuestionCardVariantsProps = {
  variants: VariantAnswer[]
  onAddVariant: (variant: VariantAnswer) => void
  isVariantsHide: boolean
}
