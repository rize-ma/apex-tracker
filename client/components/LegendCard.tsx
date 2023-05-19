import { LegendData } from '@/types'
import { Avatar, Card, Center, Text } from '@mantine/core'
import React, { FC } from 'react'

type Props = {
  legendData: LegendData
}

export const LegendCard: FC<Props> = ({ legendData }) => {
  const avatarImg = legendData.metadata.portraitImageUrl
  const legendName = legendData.metadata.name
  const userStatusArr = Object.entries(legendData.stats)
  return (
    <div className="min-w-350 m-5">
      <Card radius="md" className="p-6">
        <Avatar src={avatarImg} size={80} radius={80} mx="auto" />
        <Center>
          <Text size={'lg'} weight={'bold'} className="mt-3">
            {legendName}
          </Text>
        </Center>
        <div className="mt-6 flex flex-wrap">
          {userStatusArr.map((status) => (
            <div className="m-6 flex" key={status[0]}>
              <div className="h-16 w-1 rounded-full bg-slate-300"></div>
              <div className="ml-3 flex flex-col justify-around">
                <span className="font-semibold">{status[0]}</span>
                <span>{status[1].value.toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
