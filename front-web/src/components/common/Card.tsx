import { CardProps } from '@/types/card.types'

const Card = ({
  children,
  title,
  footer,
  padding = 'md',
  shadow = 'md',
  bordered = false,
  className = '',
}: CardProps) => {
  const baseStyles = 'bg-white rounded-lg'
  
  const paddingStyles = {
    none: '',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
  }
  
  const shadowStyles = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  }
  
  const borderStyles = bordered ? 'border border-gray-200' : ''
  
  const cardStyles = `${baseStyles} ${paddingStyles[padding]} ${shadowStyles[shadow]} ${borderStyles} ${className}`.trim()
  
  return (
    <div className={cardStyles}>
      {title && (
        <div className="mb-4 pb-3 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>
      )}
      <div>{children}</div>
      {footer && (
        <div className="mt-4 pt-3 border-t border-gray-200">{footer}</div>
      )}
    </div>
  )
}

export default Card

