import { SegmentedControl } from '@mantine/core'
import { Dispatch, FC, SetStateAction, useState } from 'react'

type Props = {
  platform: string
  setPlatform: Dispatch<SetStateAction<string>>
}

export const PlatformTab: FC<Props> = ({ platform, setPlatform }) => {
  const PLATFORM_DATA = [
    { label: 'origin', value: 'origin' },
    { label: 'xbox', value: 'xbl' },
    { label: 'PlayStation', value: 'psn' },
  ]

  return (
    <div>
      <SegmentedControl
        data={PLATFORM_DATA}
        onChange={setPlatform}
        value={platform}
        size="md"
        radius={16}
      />
    </div>
  )
}
