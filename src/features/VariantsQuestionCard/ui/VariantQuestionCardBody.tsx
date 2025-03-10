import { Checkbox } from '@/shared/ui/Checkbox'
import { RadioBtn } from '@/shared/ui/RadioBtn'
import styles from '../variantsQuestionCard.module.css'
import { VariantsQuestionCardBodyProps } from '../config/types'

export const VariantsQuestionCardBody = ({
  variants,
  type,
  data,
  isLoading,
}: VariantsQuestionCardBodyProps) => {
  return (
    <ul className={styles.variantsQuestionCardBody}>
      {variants.map((variant, index) => {
        return (
          <li key={index + variant.name}>
            {type === 'single' ? (
              <RadioBtn
                isCorrect={data?.indexes.includes(index)}
                isWrong={data && !data.indexes.includes(index)}
                disabled={!!data || isLoading}
                labelText={variant.text}
                name={variant.name}
              />
            ) : (
              <Checkbox
                isCorrect={data?.indexes.includes(index)}
                isWrong={data && !data.indexes.includes(index)}
                disabled={!!data || isLoading}
                labelText={variant.text}
              />
            )}
          </li>
        )
      })}
    </ul>
  )
}
