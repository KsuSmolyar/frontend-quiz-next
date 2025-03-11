import styles from '../questionCards.module.css'

type QuestionCardCompletionProps = {
  correctUserAnswers: number
}
export const QuestionCardCompletion = ({ correctUserAnswers }: QuestionCardCompletionProps) => {
  return (
    <div className={styles.questionCardsCompletion}>
      <h2>Викторина завершена!</h2>
      <p>Количество правильных ответов: {correctUserAnswers}</p>
    </div>
  )
}
