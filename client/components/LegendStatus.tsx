import { FC } from 'react'
import useStore from '@/store'
import { Loader } from '@mantine/core'
import { LegendCard } from './LegendCard'
import { LegendData } from '@/types'

export const LegendStatus: FC = () => {
  const { userData } = useStore()
  const activeLegendId = userData.metadata.activeLegend
  if (!userData.segments.length) return <Loader />
  const legendData = userData.segments.slice(1)
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
