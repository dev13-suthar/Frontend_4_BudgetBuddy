import { atom} from "recoil";
import { AccountBalanceSelector, TotalExpenseSelector, TotalIncomeSelector } from "./selectors";

export const TotalIncomeAtom = atom({
    key:'totalIncome',
    default:TotalIncomeSelector
});

export const TotalExpenseAtom = atom({
    key:'TotalExpense',
    default:TotalExpenseSelector
});

export const AccountBalanceAtom = atom({
    key:"AccountBalanceAtomKE&&&",
    default:AccountBalanceSelector
})