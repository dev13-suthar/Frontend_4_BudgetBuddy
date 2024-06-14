import icomePhoto from "@/assets/money.png"
import spendPhoto from "@/assets/spending.png"
import transactions from "@/assets/txns.png"
import { PieChartIcon } from "@radix-ui/react-icons"
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate();
  return (
    <div className='flex items-center justify-between px-2 py-2 w-full bg-stone-900 h-[max]'>
        <span onClick={()=>navigate("/home/addMoney")} className="flex flex-col items-center justify-center gap-1 cursor-pointer">
          <img src={icomePhoto} alt="" srcSet="" />
          <p className="text-xs">Transactions</p>
        </span>
        <span onClick={()=>navigate("/home/spendmoney")}className="flex flex-col items-center justify-center gap-1 cursor-pointer">
        <img src={spendPhoto} alt="" srcSet="" />
        <p className="text-xs">SpendMoney</p>
        </span>
        <span onClick={()=>navigate("/home/stats")} className="flex flex-col items-center justify-center gap-1 cursor-pointer">
        <PieChartIcon height={24} width={24} color="rgb(95,69,200)"/>
        <p className="text-xs">Stats</p>
        </span>
        <span onClick={()=>navigate("/home/addMoney")} className="flex flex-col items-center justify-center gap-1 cursor-pointer">
        <img src={transactions} alt="" srcSet="" />
        <p className="text-xs">AddMoney</p>
        </span>
    </div>
  )
}

export default Footer