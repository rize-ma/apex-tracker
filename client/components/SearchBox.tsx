import { TextInput } from '@mantine/core'
import { Dispatch, FC, SetStateAction, useState } from 'react'

type Props = {
  inputValue: string
  setInputValue: Dispatch<SetStateAction<string>>
  placeholder: string
}

export const SearchBox: FC<Props> = ({
  inputValue,
  setInputValue,
  placeholder,
}) => {
  return (
    <div>
      <TextInput
        radius="xl"
        size="md"
        placeholder={placeholder}
        onChange={(e) => setInputValue(e.currentTarget.value)}
        value={inputValue}
      />
    </div>
  )
}
