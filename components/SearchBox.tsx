import { TextInput } from '@mantine/core'
import { Dispatch, FC, SetStateAction, useState } from 'react'

type Props = {
  inputValue: string
  setInputValue: Dispatch<SetStateAction<string>>
}

export const SearchBox: FC<Props> = ({ inputValue, setInputValue }) => {
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
