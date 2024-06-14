import MyResponsivePie from "@/components/ChartPie";
import Footer from "@/components/Footer"
import useGetSpendStats from "@/hooks/useGetSpendStats"
import { StatsData } from "@/utils/types";

const Statistics = () => {
  const {data,isLoading} = useGetSpendStats();
  const colors = [
    "red","gree","blue","purple"
  ];
  const formattedData = data.map((item:StatsData,i)=>{
    return {
      id:item.category,
      label:item.category,
      value:`${item.amount}`,
      color:colors[i]
    }
  })
  console.log(formattedData);
  return (
    <>
        <div className="px-4 py-2 h-[86vh] w-full">
            <header className="p-1 mb-5">
                <p className="text-xl text-center font-medium">Spend Analytics</p>
            </header>
            <MyResponsivePie data={formattedData} isLoading={isLoading}/>
        </div>
        <Footer/>
    </>
  )
}

export default Statistics