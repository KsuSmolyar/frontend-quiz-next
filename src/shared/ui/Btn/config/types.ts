import { ButtonHTMLAttributes } from "react"

export type BtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "transparent" | "primary"
  className?: string
}
