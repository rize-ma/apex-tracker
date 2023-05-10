import { Button } from '@mantine/core'
import { FC, useEffect, useState } from 'react'
import { IconSearch } from '@tabler/icons-react'

type Props = {
  inputValue: string
}

export const SubmitButton: FC<Props> = ({ inputValue }) => {
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
        disabled={inputValue ? false : true}
      >
        {isMobile ? null : '検索する'}
      </Button>
    </div>
  )
}
