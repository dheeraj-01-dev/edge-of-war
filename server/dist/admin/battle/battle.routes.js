import { Router } from "express";
import { createBattleController, getRegisteredBattle } from "./battle.controller.js";
const battleRouter = Router();
battleRouter.post("/create", createBattleController);
battleRouter.get("/getregisteredbattle", getRegisteredBattle);
export default battleRouter;
//# sourceMappingURL=battle.routes.js.map