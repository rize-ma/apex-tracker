export type UserData = {
  availableSegments: Array<object>
  metadata: MetaData
  platformInfo: PlatformInfo
  segments: Array<UsersegmentsData>
  userInfo: object
}

type PlatformInfo = {
  platformSlug: string
  platformUserId: string
  platformUserHandle: string
  platformUserIdentifier: string
  avatarUrl: string
}

type MetaData = {
  currentSeason: number
  activeLegend: string
  activeLegendName: string
  activeLegendStats: Array<string>
  isGameBanned: boolean
  isOverwolfAppUser: boolean
}

type UsersegmentsData = LegendData

export type LegendData = {
  type: string
  attributes: Attributes
  metadata: LegendMetaData
  stats: LegendStats
}

type Attributes = {
  id: string
}

type LegendMetaData = {
  name: string
  imageUrl: string
  tallImageUrl: string
  bgImageUrl: string
  portraitImageUrl: string
  legendColor: string
  isActive: boolean
}
type LegendStats = {
  rankScore: RankScore
}

type RankScore = {
  rank: number
  percentile: number
  displayName: string
  displayCategory: string
  category: any
  description: any
  metadata: {
    iconUrl: string
    rankName: string
  }
  value: number
  displayValue: string
  displayType: string
}
