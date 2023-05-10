import { useQuery } from "@tanstack/react-query"
import Http from "../helpers/Http"


const fetchData = async () => {
  const { data } = await Http.get('/api/dashboard')
  return data
}

export default function useDashboardQuery() {
  return useQuery(['dashboard'], fetchData)
}