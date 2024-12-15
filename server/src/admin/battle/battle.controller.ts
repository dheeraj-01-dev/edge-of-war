import { Request, Response } from "express";
import battleModel from "../../battles/battles.model.js";

export const createBattleController = async (req:Request, res: Response) => {
    req.body.battleId = 101
    const data = req.body;

    try {
        const lastDocument = await battleModel.aggregate([
            {
                $sort: { battleId: -1}
            },
            {
                $limit: 1
            }
        ]);
        data.battleId = (lastDocument[0]?.battleId)+1;
        const battleCreated = await battleModel.create(data)
        res.status(200).json({
            success: true,
            data: battleCreated
        })  
    } catch (error) {
        console.log(error)
        res.status(400).json({
            success: false,
            error: error
        })
    }
};

export const getRegisteredBattle = async (req: Request, res: Response) => {
    try {
        const data = await battleModel.aggregate([
            {
              '$sort': {
                'expire.id': 1
              }
            }
          ]);
        res.status(200).json({
            success: true,
            data:{
                length: data.length,
                battles: data
            }
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error
        })
    }
}