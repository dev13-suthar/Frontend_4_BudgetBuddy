export type registerSchemaTypes = {
    email:string,
    password:string,
    name:string
}

export interface loginSchemaTypes {
    email:string,
    password:string
}

export interface addMoneyFormSchema{
    amount:number,
    description:string,
    title:string,
    category:string
}

export interface spendMoneyFormSchema{
    amount:number,
    title:string,
    description:string,
    category:string
}

export interface transaction{
    id: number,
    account_no: number,
    amount: number,
    type:"Credit"|"Debit" ,
    title: string,
    category_id: number
}


export interface StatsData{
        category: string,
        amount: number 
}