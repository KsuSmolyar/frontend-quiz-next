import { useDrag } from 'react-dnd'
import styles from '../matchQuestionCard.module.css'
import classNames from 'classnames'

type MatchQuestionCardDragItemProps = {
  data: string
  clearDraggedElement?: () => void
  index?: string | null
  isCanDrag?: boolean
}
export const MatchQuestionCardDragItem = ({
  data,
  clearDraggedElement,
  index,
  isCanDrag,
}: MatchQuestionCardDragItemProps) => {
  const [{ isDragStart }, dragRef] = useDrag({
    type: 'match',
    item: { data, index },
    collect: (monitor) => ({
      isDragStart: monitor.isDragging(),
    }),
    end: (item, monitor) => {
      if (
        monitor.didDrop() &&
        monitor.getDropResult<{ prevIndex: number }>()?.prevIndex !== item.index
      ) {
        clearDraggedElement?.()
      }
    },
    canDrag: () => {
      if (typeof isCanDrag === 'boolean') {
        return isCanDrag
      }
      return true
    },
  })
  return (
    <span
      ref={(node) => {
        dragRef(node)
      }}
      className={classNames(styles.matchQuestionCardMatchVariant, {
        [styles.isDragged]: isDragStart,
        [styles.disabledDrag]: typeof isCanDrag === 'boolean' && !isCanDrag,
      })}
    >
      {data}
    </span>
  )
}
