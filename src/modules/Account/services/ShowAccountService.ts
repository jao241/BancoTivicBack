import { getRepository } from "typeorm";
import Account from "../typeorm/entity/Account";

export default class ShowAccountService{
    public async execute(idAccount:string):Promise<Account>{
        const accountRepository = getRepository(Account);
        const account = await accountRepository.findOne(idAccount) as Account;
        return account;
    }
}