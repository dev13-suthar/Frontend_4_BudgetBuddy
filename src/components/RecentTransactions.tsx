import { useEffect, useState } from "react"
import Transaction from "./Transaction"
import axios from "axios"
import { BACKEND_URL } from "@/constants/constants"
import { transaction } from "@/utils/types"
import { Skeleton } from "./ui/skeleton"

const RecentTransactions = () => {
  const [transactions, settransactions] = useState<[] | transaction[]>([]);
  const [isLoading, setisLoading] = useState(false);
  useEffect(()=>{
      const result = async()=>{
        setisLoading(true);
        const res = await axios.get(`${BACKEND_URL}/v1/transaction/allTransaction`,{
          headers:{
            "Authorization":localStorage.getItem("token")
          }
        });
        const data = await res.data;
        settransactions(data.AllTransactions);
        setisLoading(false);
      }
      result();
  },[])
  return (
    <div className='p-2 pt-4 w-full h-fit md:h-full  overflow-x-hidden overflow-y-auto border md:p-4'>
        <header className="pb-3">
          <p className="text-[17px] md:text-[21px]">Recent Transaction</p>
        </header><hr />
        <div className="pt-5 flex items-center justify-center gap-2 flex-col">
            
            {isLoading?(
              [1,2,3,4,5].map((i)=>(
                <Skeleton key={i} className="px-3  py-1 shadow-2xl bg-slate-700 w-full flex items-center justify-between rounded-2xl h-8"/>
              ))
            ):( 
              transactions.map((txn)=>(
                <Transaction key={txn.id} title={txn.title} type={txn.type} amount={txn.amount}/>
              ))
            )}
            </div>
    </div>
  )
}

export default RecentTransactions
