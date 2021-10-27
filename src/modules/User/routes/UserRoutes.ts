import { Router } from "express";
import UserController from "../controller/UserController";
import {celebrate, Joi, Segments} from "celebrate";

const UserRoutes = Router();
const userController = new UserController();

UserRoutes.post("", celebrate({
    [Segments.BODY]:{
        name: Joi.string().required(),
        password: Joi.string().required()
    }
}), userController.create);

UserRoutes.get("", userController.index);

export default UserRoutes;