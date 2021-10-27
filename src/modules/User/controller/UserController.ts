import { Request, Response } from "express";
import CreateUserService from "../services/CreateUserService";
import ListUserService from "../services/ListUserService";

export default class UserController{
    public async create(request:Request, response:Response):Promise<Response>{
        const createUserService = new CreateUserService();
        const {name, password} = request.body;
        await createUserService.execute({name, password});
        return response.status(204).json();
    }
    
    public async index(request:Request, response:Response):Promise<Response>{
        const listUserService = new ListUserService();
        const users = await listUserService.execute();
        return response.status(200).json(users);
    }
}