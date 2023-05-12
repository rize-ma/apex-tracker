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
