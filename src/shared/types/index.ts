import { JavascriptAnswer, ReactAnswer } from '@/payload-types'

export type Theme = {
  id: string
  title: string
  description: string
  count: number
}

export type QuestionCardType = 'single' | 'multiple' | 'match'

export type ThemeQuestion = {
  id: string
  question: string
  variants: VariantAnswer[]
  given?: GivenVariant[] | null
  type: QuestionCardType
}

export type VariantAnswer = {
  text?: string | null
  name?: string | null
  id?: string | null
}

export type GivenVariant = {
  text?: string
}

export type QuestionData = {
  theme: string
  id: string
}

export type Answer = ReactAnswer | JavascriptAnswer

export type ThemeModes = 'dark' | 'light'

export const themes = {
  dark: 'dark',
  light: 'light',
} as const
