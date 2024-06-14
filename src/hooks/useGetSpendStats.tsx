import { BACKEND_URL } from '@/constants/constants';
import { StatsData } from '@/utils/types';
import axios from 'axios';
import { useEffect, useState } from 'react'

const useGetSpendStats = () => {
    const [data, setdata] = useState<[] | StatsData[]>([]);
    const [isLoading, setisLoading] = useState(false);
    useEffect(()=>{
        const getData = async()=>{
            setisLoading(true)
            const res = await axios.get(`${BACKEND_URL}/v1/transaction/stats`,{
                headers:{
                    "Authorization":localStorage.getItem("token")
                }
            });
            const result = res.data.categoryStats;
            setdata(result);
            setisLoading(false);
        }
        getData();
    },[])
  return (
    {data,isLoading}
  )
}

export default useGetSpendStats