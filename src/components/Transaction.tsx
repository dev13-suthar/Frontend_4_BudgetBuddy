import transactionImage from "@/assets/txn.png";


type props = {
  title: string;
  amount: number | string;
  type: "Credit" | "Debit";
};

const Transaction = ({ title, amount, type }: props) => {
  return (
    <div className="px-3 py-1 shadow-2xl bg-slate-900 w-full flex items-center justify-between rounded-2xl">
      <div className="flex gap-2 items-center">
        <span>
          <img
            src={transactionImage}
            alt=""
            srcSet=""
            height={"30px"}
            width={"30px"}
          />
        </span>
        <span>{title}</span>
      </div>
      <div>
        {type === "Credit" ? <span className="font-bold text-green-400">+{amount}$</span> : <span className="font-bold text-red-400">-${amount}</span>}
      </div>  
    </div>
  );
};

export default Transaction;
