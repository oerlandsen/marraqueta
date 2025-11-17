import { useState } from 'react'
import type { ChangeEvent } from 'react'
import Button from '@components/common/Button'
import Input from '@components/common/Input'
import Card from '@components/common/Card'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [hasError, setHasError] = useState(false)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    if (hasError) {
      setHasError(false)
    }
  }

  const handleSubmit = () => {
    if (!inputValue.trim()) {
      setHasError(true)
      return
    }
    alert(`Submitted: ${inputValue}`)
    setInputValue('')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            React + TypeScript + Vite + Tailwind
          </h1>
          <p className="text-lg text-gray-600">
            Clean code with reusable components and type definitions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card title="Button Examples" padding="lg">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="success">Success</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="info">Info</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
              <Button fullWidth onClick={() => alert('Full width button clicked!')}>
                Full Width Button
              </Button>
              <Button disabled>Disabled Button</Button>
            </div>
          </Card>

          <Card title="Input Examples" padding="lg">
            <div className="space-y-4">
              <Input
                placeholder="Enter your name"
                value={inputValue}
                onChange={handleInputChange}
                error={hasError}
                errorMessage={hasError ? 'This field is required' : undefined}
              />
              <Input
                type="email"
                placeholder="Enter your email"
                required
              />
              <Input
                type="password"
                placeholder="Enter your password"
              />
              <Input
                placeholder="Disabled input"
                disabled
                defaultValue="Cannot edit this"
              />
            </div>
          </Card>
        </div>

        <Card title="Form Example" padding="lg" footer={
          <div className="flex justify-end gap-2">
            <Button variant="secondary" onClick={() => setInputValue('')}>
              Clear
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        }>
          <div className="space-y-4">
            <Input
              placeholder="Enter something..."
              value={inputValue}
              onChange={handleInputChange}
              error={hasError}
              errorMessage={hasError ? 'This field is required' : undefined}
            />
            <p className="text-sm text-gray-600">
              Current value: <span className="font-mono">{inputValue || '(empty)'}</span>
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default App

