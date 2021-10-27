import { getRepository } from "typeorm";
import Account from "../typeorm/entity/Account";

export default class ListAccountsService{
    public async execute():Promise<Account[]>{
        const AccountRepository = getRepository(Account);
        const accounts = await AccountRepository.find();
        return accounts;
    }
}