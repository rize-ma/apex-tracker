import { SegmentedControl } from '@mantine/core'
import { useState } from 'react'

export const PlatformTab = () => {
  const [platform, setPlatform] = useState('origin')
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
