import create from 'zustand'
import { UserData } from '@/types'

type State = {
  userData: UserData
  updateUserData: (payload: UserData) => void
  resetEditedTask: () => void
}

const useStore = create<State>((set) => ({
  userData: {
    availableSegments: [],
    metadata: {},
    platformInfo: {},
    segments: [],
    userInfo: {},
  },
  updateUserData: (payload) =>
    set({
      userData: {
        availableSegments: payload.availableSegments,
        metadata: payload.metadata,
        platformInfo: payload.platformInfo,
        segments: payload.segments,
        userInfo: payload.userInfo,
      },
    }),
  resetEditedTask: () =>
    set({
      userData: {
        availableSegments: [],
        metadata: {},
        platformInfo: {},
        segments: [],
        userInfo: {},
      },
    }),
}))

export default useStore
