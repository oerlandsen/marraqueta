import type { BaseComponentProps, Variant, Size } from './component.types'

export interface ButtonProps extends BaseComponentProps {
  variant?: Variant
  size?: Size
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  fullWidth?: boolean
}

