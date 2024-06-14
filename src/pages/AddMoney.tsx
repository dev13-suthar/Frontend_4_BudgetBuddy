import AddMoneyForm from "@/components/AddMoneyForm"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const AddMoney = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [Amount, setAmount] = useState<number>(0);
  const navigate = useNavigate();
  return (
    <div className="">
        <header className="p-1 flex flex-col items-center justify-center pt-4 relative">
            <p className="text-xl font-semibold">Add Money</p>
            <span className="absolute left-3 top-4">
                <span className="text-2xl sm:text-4xl text-purple-700 font-bold" role="button" onClick={()=>navigate("/home/v1")}>&larr;</span>
            </span>
        </header>
        <div className="mt-4 bg-slate-900 h-[max] w-full rounded-tl-3xl rounded-tr-3xl p-2">
                <div className="mt-8 pl-8">
                    <p className="text-2xl font-semibold">How Much?</p>
                </div>
               <div className="flex justify-center px-6 py-4 flex-col">
                  <input value={Amount} onChange={(e)=>setAmount(Number(e.target.value))} type="text" className="p-2 w-full rounded-2xl outline-none h-11 text-stone-800 text-3xl" placeholder="Enter Amount" />
                  <div className="flex gap-3 justify-center pt-6">
                      <section className="p-2 bg-purple-700 rounded-2xl w-24 py-3 text-center cursor-pointer" onClick={()=>setAmount(500)}>
                        $500
                      </section>
                      <section className="p-2 bg-purple-700 rounded-2xl w-24 py-3 text-center cursor-pointer" onClick={()=>setAmount(1500)}>
                        $1500
                      </section>
                      <section className="p-2 bg-purple-700 rounded-2xl w-24 py-3 text-center cursor-pointer" onClick={()=>setAmount(2500)}>
                        $2500
                      </section>
                  </div>
               </div><br /><hr />
              <AddMoneyForm amount={Amount}/>
        </div>  
    </div>
  )
}

export default AddMoney