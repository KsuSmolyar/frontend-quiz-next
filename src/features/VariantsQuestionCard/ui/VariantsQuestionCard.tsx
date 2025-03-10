import { useState } from 'react'
import { BaseQuestionCard } from '@/entities/BaseQuestionCard'
import { VariantsQuestionCardBody } from './VariantQuestionCardBody'
import { VariantsQuestionCardProps } from '../config/types'

export const VariantsQuestionCard = ({
  variants,
  type,
  isLastCard,
  onNextClick,
  question,
  data,
  isLoading,
  onSubmit,
  setUserTotalAnswers,
}: VariantsQuestionCardProps) => {
  const [isDisabled, setIsDisabled] = useState(true)

  const handleChangeForm = (e: React.FormEvent<HTMLFormElement>) => {
    const formElements = [...e.currentTarget.elements].filter(
      (element) => element instanceof HTMLInputElement,
    )
    const isHasAnswers = formElements.some((el) => el.checked)

    setIsDisabled(!isHasAnswers)
  }

  const handleSetIsButtonDisable = () => {
    setIsDisabled(true)
  }

  return (
    <BaseQuestionCard
      setUserTotalAnswers={setUserTotalAnswers}
      isLoading={isLoading}
      question={question}
      onNextClick={onNextClick}
      isLastCard={isLastCard}
      handleChangeForm={handleChangeForm}
      data={data}
      setBtnDisabled={handleSetIsButtonDisable}
      isBtnDisabled={isLoading || isDisabled}
      cardBodySlot={
        <VariantsQuestionCardBody
          data={data}
          isLoading={isLoading}
          type={type}
          variants={variants}
        />
      }
      onSubmit={onSubmit}
    />
  )
}
