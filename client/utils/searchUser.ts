import axios from 'axios'

export const searchUser = (platform: string, userId: string) => {
  const getUserData = () => {
    try {
      const data = axios.get(
        `http://localhost:3005/apex-tracker/${platform}/${userId}`
      )
      return data
    } catch (e: any) {
      return { message: 'エラーが発生しました' }
    }
  }
  return getUserData()
}
