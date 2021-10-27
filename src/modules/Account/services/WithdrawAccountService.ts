import { getRepository } from "typeorm";
import Account from "../typeorm/entity/Account";

interface IAccount{
    idAccount:string;
    value:number;
}

export default class WithdrawAccountService{
    public async execute({idAccount, value}:IAccount){
        const accountRepository = getRepository(Account);
        const account = await accountRepository.findOne(idAccount) as Account;
        const valueString = JSON.stringify(value);
        const valueOnly = Number(valueString.substring(9, valueString.length-1));
        if(account.balance >= valueOnly){
            account.balance -= valueOnly;
            await accountRepository.save(account);
        }
    }
}