import { Router } from "express";
import { getSingleBattle_V } from "./battles.validator.js";
import { getAllBattles, getSingleBattle_C } from "./battles.controller.js";
const battleRouter = Router();
battleRouter.get("/get/all", getAllBattles);
battleRouter.get("/get/:_id", getSingleBattle_V, getSingleBattle_C);
export default battleRouter;
//# sourceMappingURL=battles.router.js.map