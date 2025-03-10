import { InputHTMLAttributes } from "react"

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "id"> & {
  labelText: string
  isCorrect?: boolean
  isWrong?: boolean
}
