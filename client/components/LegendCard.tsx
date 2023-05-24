import { LegendData } from '@/types'
import { Avatar, Card, Center, Text } from '@mantine/core'
import React, { FC } from 'react'

type Props = {
  legendData: LegendData
  activeLegendId: string
}

export const LegendCard: FC<Props> = ({ legendData, activeLegendId }) => {
  const avatarImg = legendData.metadata.portraitImageUrl
  const legendName = legendData.metadata.name
  const legendId = legendData.attributes.id

  const legendStatusArr = Object.entries(legendData.stats)

  return (
    <div className="m-5 min-w-300">
      <Card radius="md" className="min-h-300 p-6">
        <Avatar src={avatarImg} size={80} radius={80} mx="auto" />
        <Center className="flex items-end">
          <Text size={'lg'} weight={'bold'} className="mt-3">
            {legendName}
          </Text>
          {activeLegendId === legendId ? (
            <div className="ml-3 rounded-2xl bg-red-500 p-1">選択中</div>
          ) : null}
        </Center>
        <div className="mt-6 flex flex-wrap">
          {legendStatusArr.length ? (
            legendStatusArr.map((status) => (
              <div className="m-6 flex" key={status[0]}>
                <div className="h-16 w-1 rounded-full bg-slate-300"></div>
                <div className="ml-3 flex flex-col justify-around">
                  <span className="font-semibold">{status[0]}</span>
                  <span>{status[1].value.toLocaleString()}</span>
                </div>
              </div>
            ))
          ) : (
            <Center>
              <div className="text-size-10">データなし</div>
            </Center>
          )}
        </div>
      </Card>
    </div>
  )
}
