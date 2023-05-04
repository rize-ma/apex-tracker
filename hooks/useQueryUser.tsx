import { useRouter } from 'next/router'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import useStore from '@/store'

const useQueryUser = () => {
  const router = useRouter()
  const { userInputData } = useStore()
  const getUser = async () => {
    const { data } = await axios.get(
      `https://public-api.tracker.gg/v2/apex/standard/profile/${userInputData.platform}/${userInputData.userId}`,
      {
        headers: {
          'TRN-Api-Key': process.env.APEX_TRACKER_API_KEY,
        },
      }
    )
    return data
  }
  return useQuery({
    queryKey: ['user'],
    queryFn: getUser,
    onError: (err: any) => {
      if (err.response.status === 401 || err.response.status === 403)
        router.push('/')
    },
  })
}

export default useQueryUser
