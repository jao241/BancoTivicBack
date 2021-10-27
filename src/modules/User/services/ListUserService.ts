import { getRepository } from "typeorm";
import User from "../typeorm/entity/User";

export default class ListUserService{
    public async execute():Promise<User[]>{
        const userRepository = getRepository(User);
        const users = await userRepository.find();
        return users;
    }
}