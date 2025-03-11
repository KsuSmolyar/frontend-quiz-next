'use client'

import { useEffect, useMemo, useState } from 'react'
import { MatchQuestionCard } from '@/features/MatchQuestionCard'
import { VariantsQuestionCard } from '@/features/VariantsQuestionCard'
import { QuestionCardsProps } from '../config/types'
import { ProgressBar } from '@/shared/ui/ProgressBar'
import { postAnswer } from '@/shared/api/action'
import { Answer } from '@/shared/types'
import { QuestionCardCompletion } from './QuestionCardCompletion'

export const QuestionCards = ({ themesData, theme }: QuestionCardsProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [answerData, setAnswerData] = useState<Answer | null>(null)

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
    setAnswerData(null)
  }

  const handleSetSolvedQuestions = () => {
    setSolvedQuestions((prev) => prev + 1)
  }

  const handleSubmit = async () => {
    if (theme && questionCardData) {
      setIsLoading(true)
      const { docs } = await postAnswer({ theme, id: questionCardData.id })
      setAnswerData(docs[0])
      setIsLoading(false)
    }
    handleSetSolvedQuestions()
  }

  useEffect(() => {
    if (answerData) {
      const isCorrect = userTotalAnswers.every((item, index) => item === answerData.indexes[index])
      if (isCorrect) {
        setCorrectUserAnswers((prev) => prev + 1)
      }
    }
  }, [answerData, userTotalAnswers])

  return (
    <>
      <ProgressBar solvedQuestions={solvedQuestions} totalQuestions={themesData?.length ?? 0} />
      {isLastQuestion && <QuestionCardCompletion correctUserAnswers={correctUserAnswers} />}
      {questionCardData &&
        (questionCardData.type === 'match' ? (
          <MatchQuestionCard
            {...questionCardData}
            setUserTotalAnswers={setUserTotalAnswers}
            onSubmit={handleSubmit}
            data={answerData}
            isLoading={isLoading}
            isLastCard={isLastQuestion}
            onNextClick={handleNextClick}
          />
        ) : (
          <VariantsQuestionCard
            {...questionCardData}
            setUserTotalAnswers={setUserTotalAnswers}
            onSubmit={handleSubmit}
            data={answerData}
            isLoading={isLoading}
            isLastCard={isLastQuestion}
            onNextClick={handleNextClick}
          />
        ))}
    </>
  )
}
