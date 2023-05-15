import { FC } from 'react'
import useStore from '@/store'
import Image from 'next/image'

export const UserHeader: FC = () => {
  const { userData } = useStore()
  const imageHeaderUrl =
    userData.segments[1]?.metadata.bgImageUrl ||
    'https://trackercdn.com/cdn/apex.tracker.gg/legends/wraith-concept-bg-small.jpg'
  return (
    <div>
      <header className="relative h-40 w-screen">
        <Image src={imageHeaderUrl} alt="User Header" fill></Image>
      </header>
    </div>
  )
}
