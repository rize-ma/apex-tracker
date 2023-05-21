import axios from 'axios'

export const searchUser = (platform: string, userId: string) => {
  const getUserData = () => {
    const data = axios
      .get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/apex-tracker/${platform}/${userId}`
      )
      .then((value) => value.data.data)
    return data
  }
  return getUserData()
}
