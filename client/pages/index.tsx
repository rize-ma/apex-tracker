import { useEffect } from 'react'
import SearchPage from './searchPage'
import { initialAccess } from '@/utils/initialAccess'

export default function Home() {
  useEffect(() => {
    initialAccess()
  }, [])
  return (
    <div>
      <SearchPage />
    </div>
  )
}
