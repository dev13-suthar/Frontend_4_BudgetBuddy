import { BACKEND_URL } from "@/constants/constants";
import axios from "axios";
import { selector } from "recoil";

export const TotalIncomeSelector = selector({
    key: 'totalIncomeSelector',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    get: async ({ get }) => {
      try {
        const res = await axios.get(`${BACKEND_URL}/v1/account/income`, {
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        });
        return res.data.TotalMoney;
      } catch (error) {
        console.error('Error fetching total income:', error);
        return 0; // Default value in case of error
      }
    },
  });

export const TotalExpenseSelector = selector({
    key:'totalExpensSelector',
    get:async()=>{
        try {
            const res = await axios.get(`${BACKEND_URL}/v1/account/expenses`, {
              headers: {
                Authorization: localStorage.getItem('token'),
              },
            });
            return res.data.totalAmount;
          } catch (error) {
            console.error('Error fetching total income:', error);
            return 0; // Default value in case of error
          }
    }
})

export const AccountBalanceSelector = selector({
    key:"AccountBalance",
    get:async()=>{
        try {
            const res = await axios.get(`${BACKEND_URL}/v1/account/balance`, {
              headers: {
                Authorization: localStorage.getItem('token'),
              },
            });
            return res.data.balance;
          } catch (error) {
            console.error('Error fetching total income:', error);
            return 0; // Default value in case of error
          }
    }
})