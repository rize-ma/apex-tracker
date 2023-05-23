import Image from 'next/image'
import { FC } from 'react'
import { UserData } from '@/types'

type Props = {
  userData: UserData
}

export const UserIcon: FC<Props> = ({userData}) => {
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
