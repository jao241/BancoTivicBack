import { Router } from "express";
import AccountRoutes from "../../modules/Account/routes/AccountRoutes";
import UserRoutes from "../../modules/User/routes/UserRoutes";

const routes = Router();

routes.use("/User", UserRoutes);

routes.use("/Account", AccountRoutes);

export default routes;