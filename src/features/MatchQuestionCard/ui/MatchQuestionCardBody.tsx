import styles from '../matchQuestionCard.module.css'
import { GivenVariant, VariantAnswer } from '@/shared/types'
import { MatchQuestionCardDropItem } from './MatchQuestionCardDropItem'

type MatchQuestionCardBodyProps = {
  given?: GivenVariant[] | null
  onRemoveVariant: (variant: VariantAnswer) => void
  setUserAnswer: (questionIndex: number, answerIndex: number) => void
  onAddVariant: (variant: VariantAnswer) => void
  answers?: number[]
  userAnswers: number[]
  isCanDrag: boolean
}
export const MatchQuestionCardBody = ({
  given,
  onRemoveVariant,
  setUserAnswer,
  onAddVariant,
  answers,
  userAnswers,
  isCanDrag,
}: MatchQuestionCardBodyProps) => {
  if (!given) return null
  return (
    <ul className={styles.matchQuestionCardBody}>
      {given.map((item, index) => {
        return (
          <li key={index} className={styles.matchQuestionCardBodyItem}>
            <span className={styles.matchQuestionCardBodyItemText}>{item.text}</span>
            <MatchQuestionCardDropItem
              isCorrect={answers && answers[index] === userAnswers[index]}
              onRemoveVariant={onRemoveVariant}
              index={index}
              setUserAnswer={setUserAnswer}
              onAddVariant={onAddVariant}
              isCanDrag={isCanDrag}
            />
          </li>
        )
      })}
    </ul>
  )
}
