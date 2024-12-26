import { Router } from "express";
import { createBattleController, getRegisteredBattle, hostBattle_C } from "./battle.controller.js";
import { hostBattle_V } from "./battle.validator.js";

const battleRouter = Router();

battleRouter.post("/create", createBattleController)
battleRouter.post("/host/:battle", hostBattle_V, hostBattle_C)
battleRouter.get("/getregisteredbattle", getRegisteredBattle)

export default battleRouter;