import { getRepository } from "typeorm";
import Account from "../typeorm/entity/Account";

export default class CreateAccountService{
    public async execute():Promise<string>{
        const accountRepository = getRepository(Account);
        const balance = 0.0;
        const newAccount = accountRepository.create({
            balance
        });
        await accountRepository.save(newAccount);
        return newAccount.id;
    }
}