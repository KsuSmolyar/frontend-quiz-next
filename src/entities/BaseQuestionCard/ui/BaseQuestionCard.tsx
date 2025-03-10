import classNames from 'classnames'
import styles from '../baseQuestionCard.module.css'
import { Btn } from '../../../shared/ui/Btn'
import { useRef } from 'react'
import { Loader } from '../../../shared/ui/Loader'
import { BaseQuestionCardProps } from '../config/types'

export const BaseQuestionCard = ({
  isLastCard,
  question,
  handleChangeForm,
  onNextClick,
  data,
  isBtnDisabled,
  cardBodySlot,
  matchVariantsSlot,
  onSubmit,
  isLoading,
  setBtnDisabled,
  setUserTotalAnswers,
  userAnswersFromMatch,
}: BaseQuestionCardProps) => {
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const inputs = [...e.currentTarget.elements].filter((el) => el instanceof HTMLInputElement)

    if (inputs.length) {
      const userAnswers: number[] = []
      inputs.forEach((input, index) => {
        if (input.checked) {
          userAnswers.push(index)
        }
      })
      setUserTotalAnswers(userAnswers)
    } else if (userAnswersFromMatch) {
      setUserTotalAnswers(userAnswersFromMatch)
    }

    onSubmit()
  }

  const handleNextClick = () => {
    setBtnDisabled?.()
    setUserTotalAnswers([])
    formRef.current?.reset()
    onNextClick()
  }

  return (
    <article
      className={classNames(styles.baseQuestionCard, {
        [styles.disabledCard]: isLoading,
      })}
    >
      <form
        className={styles.baseQuestionCardForm}
        onChange={handleChangeForm}
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <p className={styles.baseQuestionCardTitle}>{question}</p>
        {cardBodySlot}
        {!data ? (
          <Btn
            className={styles.baseQuestionCardBtn}
            type={'submit'}
            disabled={isBtnDisabled}
            // onClick={handleSubmit}
          >
            Ответить
          </Btn>
        ) : (
          <Btn
            className={classNames(styles.baseQuestionCardBtn, { [styles.isHide]: isLastCard })}
            type={'button'}
            onClick={handleNextClick}
          >
            Следующий
          </Btn>
        )}
      </form>
      {matchVariantsSlot}
      {data && <div className={styles.baseQuestionCardDescription}>{data.description}</div>}
      {isLoading && <Loader className={styles.baseQuestionCardLoader} />}
    </article>
  )
}
