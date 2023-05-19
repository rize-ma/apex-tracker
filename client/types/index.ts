export type UserData = {
  availableSegments: Array<object>
  metadata: object
  platformInfo: PlatformInfo
  segments: Array<any>
  userInfo: object
}

type PlatformInfo = {
  platformSlug: string
  platformUserId: string
  platformUserHandle: string
  platformUserIdentifier: string
  avatarUrl: string
}

export type LegendData = {
  type: string
  attributes: object
  metadata: LegendMetaData
  stats: object
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
