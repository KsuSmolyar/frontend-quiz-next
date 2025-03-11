import { useDrop } from 'react-dnd'
import styles from '../matchQuestionCard.module.css'
import classNames from 'classnames'
import { MatchQuestionCardDragItem } from './MatchQuestionCardDragItem'
import { MatchQuestionCardVariantsProps } from '../config/types'

export const MatchQuestionCardVariants = ({
  variants,
  onAddVariant,
  isVariantsHide,
}: MatchQuestionCardVariantsProps) => {
  const [{ isDragging }, dropRef] = useDrop({
    accept: 'match',
    drop(data: { data: string; index: number }) {
      onAddVariant({ text: data.data, id: data.index.toString() })
    },
    collect: (monitor) => ({
      isDragging: monitor.isOver(),
    }),
  })

  return (
    <div
      className={classNames(styles.matchQuestionCardVariants, {
        [styles.isDragging]: isDragging,
        [styles.isHide]: isVariantsHide,
      })}
      ref={(node) => {
        dropRef(node)
      }}
    >
      {variants.map((variant, index) => {
        return (
          <MatchQuestionCardDragItem key={index} index={variant.id} data={variant.text ?? ''} />
        )
      })}
    </div>
  )
}
