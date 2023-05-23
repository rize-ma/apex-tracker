import { FC } from 'react'
import Image from 'next/image'
import { UserData } from '@/types'

type Props = {
  userData: UserData
}

export const UserHeader: FC<Props> = ({ userData }) => {
  const getLegendHeader = () => {
    const activeLegendId = userData.metadata.activeLegend
    let legendHeader
    userData.segments.forEach((data) => {
      if (data.attributes.id === activeLegendId) {
        legendHeader = data.metadata.bgImageUrl
      }
    })
    return legendHeader
  }
  const imageHeaderUrl =
    getLegendHeader() ||
    'https://trackercdn.com/cdn/apex.tracker.gg/legends/wraith-concept-bg-small.jpg'
  return (
    <div>
      <header className="relative h-40 w-full">
        <Image src={imageHeaderUrl} alt="User Header" fill></Image>
      </header>
    </div>
  )
}
