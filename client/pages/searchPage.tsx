import { Layout } from '@/components/Layout'
import { PlatformTab } from '@/components/PlatformTab'
import { SearchBox } from '@/components/SearchBox'
import { SubmitButton } from '@/components/SubmitButton'
import useStore from '@/store'
import { searchUser } from '@/utils/searchUser'
import { Alert } from '@mantine/core'
import { NextPage } from 'next'
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/router'

const SearchPage: NextPage = () => {
  const [platform, setPlatform] = useState('origin')
  const [userId, setUserId] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const setUserData = useStore((state) => state.updateUserData)
  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('押された')
    const data = await searchUser(platform, userId)
    if (data.message) {
      setErrorMessage(data.message)
      return
    }
    setUserData(data)
    router.push(`/dashboard?platform=${platform}&userId=${userId}`)
    setPlatform('origin')
    setUserId('')
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
          <div className="m-10 flex w-full items-center justify-center">
            <div className="ml-2 mr-9 w-full">
              <SearchBox
                inputValue={userId}
                setInputValue={setUserId}
                placeholder="ユーザーIDを入力してください"
              />
            </div>
            <SubmitButton inputValue={userId} />
          </div>
        </div>
      </form>
    </Layout>
  )
}

export default SearchPage
