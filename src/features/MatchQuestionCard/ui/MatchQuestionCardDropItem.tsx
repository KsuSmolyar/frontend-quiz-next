import { useDrop } from 'react-dnd'
import styles from '../matchQuestionCard.module.css'
import { useState } from 'react'
import classNames from 'classnames'
import { VariantAnswer } from '../../../shared/types'
import { MatchQuestionCardDragItem } from './MatchQuestionCardDragItem'

type MatchQuestionCardDropItemProps = {
  onRemoveVariant: (variant: VariantAnswer) => void
  index: number
  setUserAnswer: (questionIndex: number, answerIndex: number) => void
  onAddVariant: (variant: VariantAnswer) => void
  isCorrect: boolean | undefined
  isCanDrag: boolean
}
export const MatchQuestionCardDropItem = ({
  onRemoveVariant,
  index,
  setUserAnswer,
  onAddVariant,
  isCorrect,
  isCanDrag,
}: MatchQuestionCardDropItemProps) => {
  const [draggedElement, setDraggedElement] = useState<{ text: string; index: string } | null>(null)
  const [{ isDragging }, dropRef] = useDrop({
    accept: 'match',
    drop(data: { data: string; index: number }) {
      setDraggedElement({ text: data.data, index: data.index.toString() })
      if (draggedElement) {
        onAddVariant({ text: draggedElement.text, id: draggedElement.index.toString() })
      }
      onRemoveVariant({ text: data.data })
      setUserAnswer(index, data.index)
      return { prevIndex: draggedElement?.index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isOver(),
    }),
  })

  const clearDraggedElement = () => {
    setDraggedElement(null)
    setUserAnswer(index, -1)
  }

  return (
    <span
      ref={(node) => {
        dropRef(node)
      }}
      className={classNames(styles.matchQuestionCardGivenDrop, {
        [styles.isDragging]: isDragging,
        [styles.isCorrect]: isCorrect,
        [styles.isWrong]: typeof isCorrect === 'boolean' && !isCorrect,
      })}
    >
      {draggedElement && (
        <MatchQuestionCardDragItem
          data={draggedElement.text}
          index={draggedElement.index}
          clearDraggedElement={clearDraggedElement}
          isCanDrag={isCanDrag}
        />
      )}
    </span>
  )
}
