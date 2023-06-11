import axios from 'axios'

export const initialAccess = () => {
  const getUserData = () => {
    const message = axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/apex-tracker/first`)
      .then((value) => value.data.message)
    return message
  }
  return getUserData()
}
