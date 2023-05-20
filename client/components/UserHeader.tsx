import { FC } from 'react'
import useStore from '@/store'
import Image from 'next/image'

export const UserHeader: FC = () => {
  const { userData } = useStore()
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
