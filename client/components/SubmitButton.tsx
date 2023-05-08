import { Button } from '@mantine/core'
import { useEffect, useState } from 'react'
import { IconSearch } from '@tabler/icons-react'

export const SubmitButton = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (navigator.userAgent.match(/(iPhone|iPod|Android.*Mobile)/i))
      setIsMobile(true)
  }, [])

  return (
    <div>
      <Button
        color="syan"
        type="submit"
        radius="lg"
        leftIcon={<IconSearch fontSize={14} />}
      >
        {isMobile ? null : '検索する'}
      </Button>
    </div>
  )
}
