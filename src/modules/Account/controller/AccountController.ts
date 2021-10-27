import { Request, Response } from "express";
import CreateAccountService from "../services/CreateAccountService";
import DepositAccountService from "../services/DepositAccountService";
import ListAccountsService from "../services/ListAccountsService";
import ShowAccountService from "../services/ShowAccountService";
import WithdrawAccountService from "../services/WithdrawAccountService";

export default class AccountController{
    public async create(request:Request, response:Response):Promise<Response>{
        const createAccountService = new CreateAccountService();
        const idAccount = await createAccountService.execute();
        return response.status(204).json();
    }

    public async withdraw(request:Request, response:Response):Promise<Response>{
        const  withdrawAccountService = new WithdrawAccountService();
        const {idAccount} = request.params;
        const value = request.body;
        await withdrawAccountService.execute({idAccount, value});
        return response.status(204).json();
    }

    public async deposit(request:Request, response:Response):Promise<Response>{
        const depositAccountService = new DepositAccountService();
        const {idAccount} = request.params;
        const value = request.body;
        await depositAccountService.execute({idAccount, value});
        return response.status(204).json();
    }

    public async show(request:Request, response:Response):Promise<Response>{
        const showAccountService = new ShowAccountService();
        const {idAccount} = request.params;
        const account = await showAccountService.execute(idAccount);    
        return response.status(200).json(account);
    }

    public async list(request:Request, response:Response):Promise<Response>{
        const listAccountsService = new ListAccountsService();
        const accounts = await listAccountsService.execute();
        return response.status(200).json(accounts);
    }
}