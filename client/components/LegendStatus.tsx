import { FC } from 'react'
import { Loader } from '@mantine/core'
import { LegendCard } from './LegendCard'
import { LegendData } from '@/types'
import { UserData } from '@/types'

type Props = {
  userData: UserData
}

export const LegendStatus: FC<Props> = ({ userData }) => {
  const activeLegendId = userData.metadata.activeLegend
  if (!userData.segments.length) return <Loader />
  const getLegendData = (userData: UserData) => {
    let legendArr = userData.segments.slice(1)
    legendArr.forEach((data, index) => {
      if (data.metadata.isActive) {
        legendArr.splice(index, 1)
        legendArr.unshift(data)
      }
    })
    return legendArr
  }
  const legendData = getLegendData(userData)
  return (
    <div className="flex flex-wrap ">
      {legendData.map((data: LegendData) => (
        <LegendCard
          key={data.metadata.name}
          legendData={data}
          activeLegendId={activeLegendId}
        />
      ))}
    </div>
  )
}
