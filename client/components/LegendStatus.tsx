import { FC } from 'react'
import useStore from '@/store'
import { Loader } from '@mantine/core'
import { LegendCard } from './LegendCard'
import { LegendData } from '@/types'

export const LegendStatus: FC = () => {
  const { userData } = useStore()
  if (!userData.segments.length) return <Loader />
  userData.segments.shift()
  const legendData = userData.segments
  return (
    <div className="max-w-500">
      {legendData.map((data: LegendData) => (
        <LegendCard key={data.metadata.name} legendData={data} />
      ))}
    </div>
  )
}
