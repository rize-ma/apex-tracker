import axios from 'axios'

export const searchUser = (platform: string, userId: string) => {
  const getUserData = () => {
    const data = axios
      .get(`http://localhost:3005/apex-tracker/${platform}/${userId}`)
      .then((value) => value.data.data)
    return data
  }
  return getUserData()
}
