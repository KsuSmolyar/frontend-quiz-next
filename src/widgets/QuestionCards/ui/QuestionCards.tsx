'use client'

import { useEffect, useMemo, useState } from 'react'
import { MatchQuestionCard } from '@/features/MatchQuestionCard'
import { VariantsQuestionCard } from '@/features/VariantsQuestionCard'
import styles from '../questionCards.module.css'
import { QuestionCardsProps } from '../config/types'
import { ProgressBar } from '@/shared/ui/ProgressBar'
import { postFetcher } from '@/shared/api'
import useSWRMutation from 'swr/mutation'

export const QuestionCards = ({ themesData, theme }: QuestionCardsProps) => {
  // const [postAnswer, { data, isLoading, reset }] = usePostAnswerMutation()

  const { trigger, isMutating, data, reset } = useSWRMutation('answer', postFetcher)

  const [userTotalAnswers, setUserTotalAnswers] = useState<number[]>([])
  const [correctUserAnswers, setCorrectUserAnswers] = useState(0)

  const [solvedQuestions, setSolvedQuestions] = useState(0)

  const [currentIndex, setCurrentIndex] = useState(0)

  const questionCardData = useMemo(() => {
    if (themesData) {
      return themesData[currentIndex]
      // return themesData.at(8)
    }
  }, [currentIndex, themesData])

  const isLastQuestion = themesData?.length === solvedQuestions

  const handleNextClick = () => {
    setCurrentIndex((prev) => prev + 1)
    reset()
  }

  const handleSetSolvedQuestions = () => {
    setSolvedQuestions((prev) => prev + 1)
  }

  const handleSubmit = () => {
    if (theme && questionCardData) {
      trigger({ theme, id: questionCardData.id })
    }
    handleSetSolvedQuestions()
  }

  useEffect(() => {
    if (data) {
      const isCorrect = userTotalAnswers.every((item, index) => item === data.indexes[index])
      if (isCorrect) {
        setCorrectUserAnswers((prev) => prev + 1)
      }
    }
  }, [data, userTotalAnswers])

  return (
    <>
      <ProgressBar solvedQuestions={solvedQuestions} totalQuestions={themesData?.length ?? 0} />
      {isLastQuestion && (
        <div className={styles.questionCardsCompletion}>
          <h2>Викторина завершена!</h2>
          <p>Количество правильных ответов: {correctUserAnswers}</p>
        </div>
      )}
      {questionCardData &&
        (questionCardData.type === 'match' ? (
          <MatchQuestionCard
            {...questionCardData}
            setUserTotalAnswers={setUserTotalAnswers}
            onSubmit={handleSubmit}
            data={data}
            isLoading={isMutating}
            isLastCard={isLastQuestion}
            onNextClick={handleNextClick}
          />
        ) : (
          <VariantsQuestionCard
            {...questionCardData}
            setUserTotalAnswers={setUserTotalAnswers}
            onSubmit={handleSubmit}
            data={data}
            isLoading={isMutating}
            isLastCard={isLastQuestion}
            onNextClick={handleNextClick}
          />
        ))}
    </>
  )
}
