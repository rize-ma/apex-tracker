import { Layout } from '@/components/Layout'
import { UserHeader } from '@/components/UserHeader'
import { UserIcon } from '@/components/UserIcon'
import useStore from '@/store'
import { UserData } from '@/types'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { searchUser } from '@/utils/searchUser'
import { useEffect } from 'react'
import { UserStatus } from '@/components/UserStatus'
import { LegendStatus } from '@/components/LegendStatus'

const Dashboard: NextPage = () => {
  const { userData } = useStore()
  const setUserData = useStore((state) => state.updateUserData)
  const router = useRouter()
  const { platform, userId } = router.query

  const backSearchPage = () => {
    router.push('/')
  }

  useEffect(() => {
    const hasUserData = (data: UserData) => {
      return !Object.keys(data.metadata).length
    }

    const getUserData = async (platform: string, userId: string) => {
      const data = await searchUser(platform, userId)
      setUserData(data)
    }

    if (hasUserData(userData) && router.isReady) {
      if (typeof platform === 'string' && typeof userId === 'string')
        getUserData(platform, userId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [platform, userId])

  return (
    <Layout title="ユーザーページ">
      <div className="absolute top-0 w-full">
        <div>
          <UserHeader />
        </div>
        <div className="absolute left-4 top-1/2 w-[calc(100%_-_16px)]">
          <UserIcon />
          <div className="mt-4 flex items-end">
            <span className="text-2xl">
              {userData.platformInfo.platformUserId}
            </span>
            <div className="ml-7 cursor-pointer" onClick={backSearchPage}>
              <span className="underline">検索ページへ</span>
            </div>
          </div>
          <div className="mt-9 w-fit">
            <UserStatus />
          </div>
          <div className="mt-10 w-fit">
            <LegendStatus />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard
