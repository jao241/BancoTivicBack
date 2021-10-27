import { getRepository } from "typeorm";
import CreateAccountService from "../../Account/services/CreateAccountService";
import User from "../typeorm/entity/User";

interface IUser{
    name:string;
    password:string;
}

export default class CreateUserService{
    public async execute({name, password}:IUser){
        const userRepository = getRepository(User);
        const newAccount = new CreateAccountService();
        const idAccount = await newAccount.execute();
        const newUser = userRepository.create({
            name, 
            password,
            idAccount
        });
        await userRepository.save(newUser);
    }
}