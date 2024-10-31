import { Router } from "express";
import { getAllBattles } from "./battles.controller.js";
const battleRouter = Router();
battleRouter.get("/get/all", getAllBattles);
export default battleRouter;
//# sourceMappingURL=battles.router.js.map