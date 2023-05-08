import { TextInput } from '@mantine/core'
import { useState } from 'react'

export const SearchBox = () => {
  const [inputValue, setInputValue] = useState('')
  return (
    <div>
      <TextInput
        radius="xl"
        size="md"
        placeholder="ユーザーIDを入力してください"
        onChange={(e) => setInputValue(e.currentTarget.value)}
        value={inputValue}
      />
    </div>
  )
}
