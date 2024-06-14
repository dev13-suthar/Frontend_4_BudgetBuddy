import { AccountBalanceAtom } from "@/store/atoms"
import { useRecoilCallback } from "recoil"


// Custom hook to Update Account Balance from Anywhere
const useUpdateAccountBalance = () => {
    return useRecoilCallback(({ set }) => async (amount) => {
      set(AccountBalanceAtom, amount);
    });
  };
  
  export default useUpdateAccountBalance;