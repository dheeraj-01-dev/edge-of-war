import { Router } from "express";
import { getSingleBattle_V, joinBattle_V } from "./battles.validator.js";
import { createBattleOrder, getAllBattles, getRegisteredBattle_C, getSingleBattle_C } from "./battles.controller.js";
const battleRouter = Router();
battleRouter.get("/get/all", getAllBattles);
battleRouter.get("/get/upcoming", getRegisteredBattle_C);
battleRouter.post("/join", joinBattle_V, createBattleOrder);
battleRouter.get("/get/:_id", getSingleBattle_V, getSingleBattle_C);
export default battleRouter;
//# sourceMappingURL=battles.router.js.map