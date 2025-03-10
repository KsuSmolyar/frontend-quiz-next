import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'
import { BaseQuestionCard } from '../../../entities/BaseQuestionCard'
import { MatchQuestionCardBody } from './MatchQuestionCardBody'
import { useMemo, useState } from 'react'
import { VariantAnswer } from '../../../shared/types'
import { MatchQuestionCardVariants } from './MatchQuestionCardVariants'
import { MatchQuestionCardProps } from '../config/types'
import { useMedia } from '@/shared/hooks'

export const MatchQuestionCard = ({
  isLastCard,
  onNextClick,
  question,
  variants,
  given,
  data,
  isLoading,
  onSubmit,
  setUserTotalAnswers,
}: MatchQuestionCardProps) => {
  const [currentVariants, setCurrentVariants] = useState(variants)
  const [userAnswers, setUserAnswers] = useState<number[]>(new Array(variants.length).fill(-1))

  console.log('userAnswers from MatchQuestionCard', userAnswers)
  const isTablet = useMedia('(max-width: 1024px)')
  const dndProviderBackend = isTablet ? TouchBackend : HTML5Backend

  const isHasAnswers = useMemo(() => {
    return !userAnswers.every((el) => el > -1)
  }, [userAnswers])

  const handleAddVariant = (variant: VariantAnswer) => {
    setCurrentVariants((prev) => {
      if (!prev.find((currentVariant) => currentVariant.text === variant.text)) {
        return [...prev, variant]
      }
      return prev
    })
  }

  const handleRemoveVariant = (variant: VariantAnswer) => {
    setCurrentVariants((prev) => prev.filter((currVariant) => currVariant.text !== variant.text))
  }

  const handleSetUserAnswer = (questionIndex: number, answerIndex: number) => {
    setUserAnswers((prev) => {
      prev[questionIndex] = answerIndex
      return [...prev]
    })
  }

  return (
    <DndProvider backend={dndProviderBackend}>
      <BaseQuestionCard
        userAnswersFromMatch={userAnswers}
        setUserTotalAnswers={setUserTotalAnswers}
        isLoading={isLoading}
        isBtnDisabled={isLoading || isHasAnswers}
        isLastCard={isLastCard}
        onNextClick={onNextClick}
        question={question}
        data={data}
        onSubmit={onSubmit}
        cardBodySlot={
          <MatchQuestionCardBody
            onAddVariant={handleAddVariant}
            onRemoveVariant={handleRemoveVariant}
            setUserAnswer={handleSetUserAnswer}
            userAnswers={userAnswers}
            answers={data?.indexes}
            given={given}
            isCanDrag={!data}
          />
        }
        matchVariantsSlot={
          <MatchQuestionCardVariants
            isVariantsHide={!!data}
            onAddVariant={handleAddVariant}
            variants={currentVariants}
          />
        }
      />
    </DndProvider>
  )
}
