import axios from 'axios'

export const searchUser = (platform: string, userId: string) => {
  const getUserData = async () => {
    try {
      const data = await axios.get(
        `https://public-api.tracker.gg/v2/apex/standard/profile/${platform}/${userId}`,
        {
          headers: {
            'TRN-Api-Key': process.env.APEX_TRACKER_API_KEY,
          },
        }
      )
      return data
    } catch (e: any) {
      console.log(e)
    }
  }
  getUserData()
}
