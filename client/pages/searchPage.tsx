import { Layout } from '@/components/Layout'
import { PlatformTab } from '@/components/PlatformTab'
import { SearchBox } from '@/components/SearchBox'
import { SubmitButton } from '@/components/SubmitButton'
import { searchUser } from '@/utils/searchUser'
import { Alert } from '@mantine/core'
import { NextPage } from 'next'
import { FormEvent, useState } from 'react'

export const SearchPage: NextPage = () => {
  const [platform, setPlatform] = useState('origin')
  const [inputValue, setInputValue] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = await searchUser(platform, inputValue)
    if (data.message) {
      setErrorMessage(data.message)
      return
    }
  }
  return (
    <Layout title="ユーザー検索">
      {errorMessage && (
        <Alert
          my="md"
          variant="filled"
          title="検索失敗"
          color="red"
          radius="md"
        >
          {errorMessage}
        </Alert>
      )}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center">
          <PlatformTab platform={platform} setPlatform={setPlatform} />
          <div className="mt-10 flex w-full items-center justify-center">
            <div className="mr-9 w-96">
              <SearchBox
                inputValue={inputValue}
                setInputValue={setInputValue}
              />
            </div>
            <SubmitButton />
          </div>
        </div>
      </form>
    </Layout>
  )
}
