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
        disabled={inputValue ? false : true}
      >
        {isMobile ? (
          <IconSearch fontSize={14} />
        ) : (
          <div className="flex items-center">
            <IconSearch fontSize={14} />
            <span>検索する</span>
          </div>
        )}
      </Button>
    </div>
  )
}
