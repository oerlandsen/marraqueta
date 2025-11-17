import { InputProps } from '@/types/input.types'

const Input = ({
  type = 'text',
  placeholder,
  value,
  defaultValue,
  disabled = false,
  required = false,
  onChange,
  onBlur,
  onFocus,
  name,
  id,
  error = false,
  errorMessage,
  className = '',
}: InputProps) => {
  const baseStyles = 'w-full px-4 py-2 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1'
  
  const normalStyles = 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
  const errorStyles = 'border-red-500 focus:border-red-500 focus:ring-red-500'
  
  const disabledStyles = disabled
    ? 'bg-gray-100 cursor-not-allowed opacity-60'
    : 'bg-white'
  
  const inputStyles = error ? errorStyles : normalStyles
  const combinedStyles = `${baseStyles} ${inputStyles} ${disabledStyles} ${className}`.trim()
  
  return (
    <div className="w-full">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        name={name}
        id={id}
        className={combinedStyles}
      />
      {error && errorMessage && (
        <p className="mt-1 text-sm text-red-600">{errorMessage}</p>
      )}
    </div>
  )
}

export default Input

