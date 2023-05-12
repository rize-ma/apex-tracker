import { Layout } from '@/components/Layout'
import { UserHeader } from '@/components/UserHeader'
import { UserIcon } from '@/components/UserIcon'
import React from 'react'

const dashboard = () => {
  return (
    <Layout title="ユーザーページ">
      <div className="absolute top-0">
        <div>
          <UserHeader />
        </div>
        <div className="absolute left-4 top-1/2">
          <UserIcon />
        </div>
      </div>
    </Layout>
  )
}

export default dashboard
