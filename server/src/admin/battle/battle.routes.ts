import { Router } from "express";
import { createBattleController, getRegisteredBattle, hostBattle_C, publishPositions_C } from "./battle.controller.js";
import { hostBattle_V } from "./battle.validator.js";

const battleRouter = Router();

battleRouter.post("/create", createBattleController)
battleRouter.post("/host/:battle", hostBattle_V, hostBattle_C)
battleRouter.get("/getregisteredbattle", getRegisteredBattle)
battleRouter.post("/publish/positions", publishPositions_C)
battleRouter.post("/distribute-prizes")

export default battleRouter;