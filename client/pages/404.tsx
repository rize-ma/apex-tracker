import { Layout } from '@/components/Layout'
import { useRouter } from 'next/router'
import { NextPage } from 'next'

const ErrorPage: NextPage = () => {
  const router = useRouter()
  const backSearchPage = () => {
    router.push('/')
  }
  return (
    <Layout title="エラー">
      <div className="text-xl font-bold">存在しないページです</div>
      <div className=" mt-4 cursor-pointer" onClick={backSearchPage}>
        <span className="underline">検索ページへ</span>
      </div>
    </Layout>
  )
}

export default ErrorPage
