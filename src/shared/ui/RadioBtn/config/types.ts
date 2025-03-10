import { InputHTMLAttributes } from "react"

export type RadioBtnProps = InputHTMLAttributes<HTMLInputElement> & {
  labelText: string
  name: string
  isCorrect?: boolean
  isWrong?: boolean
}
