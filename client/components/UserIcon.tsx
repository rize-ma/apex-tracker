import Image from 'next/image'
import useStore from '@/store'
import { FC } from 'react'

export const UserIcon: FC = () => {
  const { userData } = useStore()
  const iconImage = userData.platformInfo.avatarUrl || '/user.jpeg'
  return (
    <div className="relative h-32 w-32">
      <Image
        src={iconImage}
        alt="User Header"
        fill
        className="rounded-full"
      ></Image>
    </div>
  )
}
