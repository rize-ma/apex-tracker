import { Layout } from '@/components/Layout'
import { PlatformTab } from '@/components/PlatformTab'
import { SearchBox } from '@/components/SearchBox'
import { SubmitButton } from '@/components/SubmitButton'

export const SearchPage = () => {
  return (
    <Layout title="ユーザー検索">
      <form>
        <div className="flex flex-col items-center justify-center">
          <PlatformTab />
          <div className="mt-10 flex w-full items-center justify-center">
            <div className="mr-9 w-96">
              <SearchBox />
            </div>
            <SubmitButton />
          </div>
        </div>
      </form>
    </Layout>
  )
}
