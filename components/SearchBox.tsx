import { TextInput } from '@mantine/core'
import { SearchIcon } from '@heroicons/react/solid'
import { useState } from 'react'

export const SearchBox = () => {
  const [inputValue, setInputValue] = useState('')
  return (
    <div>
      <TextInput
        radius="xl"
        size="md"
        className="w-3/5"
        rightSection={<SearchIcon className="mx-1 my-1 cursor-pointer" />}
        placeholder="ユーザーIDを入力してください"
        onChange={(e) => setInputValue(e.currentTarget.value)}
        value={inputValue}
      />
    </div>
  )
}
