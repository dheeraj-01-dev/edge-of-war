import battleModel from "../../battles/battles.model.js";
export const createBattleController = async (req, res) => {
    req.body.battleId = 101;
    const data = req.body;
    try {
        const lastDocument = await battleModel.aggregate([
            {
                $sort: { battleId: -1 }
            },
            {
                $limit: 1
            }
        ]);
        data.battleId = (lastDocument[0]?.battleId) + 1 || 101;
        const battleCreated = await battleModel.create(data);
        res.status(200).json({
            success: true,
            data: battleCreated
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            error: error
        });
    }
};
export const getRegisteredBattle = async (req, res) => {
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
            data: {
                length: data.length,
                battles: data
            }
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error
        });
    }
};
export const hostBattle_C = async (req, res) => {
    const { battle } = req.params;
    const { roomId, roomPass } = req.body;
    try {
        try {
            const data = await battleModel.findOne({ _id: battle });
            if (!data) {
                return res.status(404).json({
                    success: false,
                    error: "Battle Not Found !"
                });
            }
            ;
            const { auth } = data;
            if (auth?.roomId || auth?.roomPass) {
                return res.status(400).json({
                    success: false,
                    error: "Already Hosted!"
                });
            }
            ;
        }
        catch (error) {
            console.log(error);
            return res.status(404).json({
                success: false,
                error: "Battle Not Found !"
            });
        }
        await battleModel.findOneAndUpdate({ _id: battle }, {
            auth: {
                roomId, roomPass
            },
            status: "live"
        }, { returnOriginal: false });
        res.status(200).json({
            success: true,
            data: "updated Successfully"
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error
        });
    }
};
export const publishPositions_C = async (req, res) => {
    const { battle, positions } = req.body;
    if (!(battle && positions)) {
        return res.status(400).json({
            success: false,
            error: "Invalid Pased data"
        });
    }
    try {
        const updatedBattle = await battleModel.findOneAndUpdate({ _id: battle }, {
            positions
        }, { returnOriginal: false });
        return res.status(200).json({
            success: true,
            data: updatedBattle
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message ? error.message : error
        });
    }
};
export const distributePrizes_C = async (req, res) => {
    const { battle } = req.body;
    try {
        const verifiedBattle = await battleModel.findOne({ _id: battle });
        if (!verifiedBattle) {
            return res.status(400).json({
                success: false,
                error: "battle not found"
            });
        }
        ;
        if (verifiedBattle.positions.length < 1) {
            return res.status(400).json({
                success: false,
                error: "positions not declared yet"
            });
        }
        ;
        try {
            await fetch("http://127.0.0.1:5000");
        }
        catch (error) {
        }
    }
    catch (error) {
    }
};
//# sourceMappingURL=battle.controller.js.map