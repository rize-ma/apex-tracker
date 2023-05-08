import create from 'zustand'
import { UserInputData } from '@/types'

type State = {
  userInputData: UserInputData
  updateUserInputData: (payload: UserInputData) => void
  resetEditedTask: () => void
}

const useStore = create<State>((set) => ({
  userInputData: { platform: '', userId: '' },
  updateUserInputData: (payload) =>
    set({
      userInputData: {
        platform: payload.platform,
        userId: payload.userId,
      },
    }),
  resetEditedTask: () => set({ userInputData: { platform: '', userId: '' } }),
}))

export default useStore
