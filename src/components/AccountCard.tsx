import { AccountBalanceAtom, TotalExpenseAtom, TotalIncomeAtom } from '@/store/atoms'
import { ArrowDownCircleIcon, ArrowUpCircleIcon } from '@heroicons/react/16/solid'
import { useRecoilValueLoadable} from 'recoil'
import { Skeleton } from "@/components/ui/skeleton"



const AccountCard = () => {
  const totalIncome = useRecoilValueLoadable(TotalIncomeAtom);
  const totalExpenses = useRecoilValueLoadable(TotalExpenseAtom);
  const AccountBalance = useRecoilValueLoadable(AccountBalanceAtom);

 if(totalIncome.state=="loading" || totalExpenses.state=="loading" || AccountBalance.state=="loading"){
  return <Skeleton className='w-[230px] h-[140px] sm:w-[270px] p-8 rounded-xl bg-slate-900'/>
 }
  return (
    <div  className='rounded-xl p-1 w-min-[240px] h-[max]  w-max-[280px] flex flex-col w-[230px] items-center
     card md:w-[300px] md:h-[150px] md:justify-center'>
        <p className='mt-2 text-[16px]'>Account Balance</p>
        <p className='text-[20px] mt-2'>&#8377;{AccountBalance.contents}</p>

        {/* Income and Expense */}
        <div className='px-2 flex items-center justify-between w-full mt-4'>
            <div className='flex items-center gap-2'>
                <ArrowDownCircleIcon color='' height={20} width={20}/>
                <p>&#8377;{totalIncome.contents}</p>
            </div>
            <div className='flex items-center gap-2'>
                <ArrowUpCircleIcon color='' height={20} width={20}/>
                <p>&#8377;{totalExpenses.contents}</p>
            </div>
        </div>
    </div>
  )
}

export default AccountCard