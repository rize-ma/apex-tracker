import { FC } from 'react'
import Image from 'next/image'
import { Loader } from '@mantine/core'
import { UserData } from '@/types'

type Props = {
  userData: UserData
}

export const UserStatus: FC<Props> = ({ userData }) => {
  if (!userData.segments.length) return <Loader />
  const rankData = userData.segments[0].stats.rankScore
  const rankImg = rankData.metadata.iconUrl
  const removeData = [
    'rankScore',
    'arenaRankScore',
    'peakRankScore',
    'lifetimePeakRankScore',
  ]
  const userStatusArr = Object.entries(userData.segments[0].stats).filter(
    (data) => !removeData.includes(data[0])
  )
  return (
    <div className="ml-5 mr-9 rounded-lg bg-neutral-700 p-5">
      <div>
        <span className="text-xl">ステータス</span>
      </div>
      <div className="ml-5 mt-5">
        <span className="text-lg">現在のランク</span>
        <div className="ml-5 mt-4 flex">
          <div>
            <Image src={rankImg} alt="Rank Score" width={80} height={80} />
          </div>
          <div className="ml-7 flex flex-col">
            <span>{rankData.metadata.rankName}</span>
            <span className="font-semibold">{rankData.value} LP</span>
            {rankData.rank ? (
              <span className="font-extralight">{rankData.rank} 位</span>
            ) : null}
          </div>
        </div>
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
      </div>
    </div>
  )
}
