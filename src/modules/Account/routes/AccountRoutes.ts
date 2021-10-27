import { Router } from "express";
import AccountController from "../controller/AccountController";
import { celebrate, Joi, Segments } from "celebrate";

const AccountRoutes = Router();
const accountController = new AccountController();

AccountRoutes.post("", accountController.create);

AccountRoutes.patch("/withdraw/:idAccount", celebrate({
    [Segments.PARAMS]:{
        idAccount: Joi.string().uuid().required()
    },
    [Segments.BODY]:{
        value: Joi.number().required()
    }
}), accountController.withdraw);

AccountRoutes.patch("/deposit/:idAccount", celebrate({
    [Segments.PARAMS]:{
        idAccount: Joi.string().uuid().required()
    },
    [Segments.BODY]:{
        value: Joi.number().required()
    }
}),accountController.deposit);

AccountRoutes.get("/:idAccount", celebrate({
    [Segments.PARAMS]:{
        idAccount: Joi.string().uuid().required()
    }
}), accountController.show);

AccountRoutes.get("", accountController.list);

export default AccountRoutes;