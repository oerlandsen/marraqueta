import type { BaseComponentProps } from './component.types'

export interface CardProps extends BaseComponentProps {
  title?: string
  footer?: React.ReactNode
  padding?: 'sm' | 'md' | 'lg' | 'none'
  shadow?: 'sm' | 'md' | 'lg' | 'xl' | 'none'
  bordered?: boolean
}

