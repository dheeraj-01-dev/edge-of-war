import battleModel from "../../battles/battles.model.js";
import orderModel from "../../orders/order.model.js";
export const createBattleController = async (req, res) => {
    req.body.battleId = 101;
    const data = req.body;
    try {
        const lastDocument = await battleModel.aggregate([
            {
                $sort: { battleId: -1 },
            },
            {
                $limit: 1,
            },
        ]);
        data.battleId = lastDocument[0]?.battleId + 1 || 101;
        const battleCreated = await battleModel.create(data);
        res.status(200).json({
            success: true,
            data: battleCreated,
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            error: error,
        });
    }
};
export const getRegisteredBattle = async (req, res) => {
    try {
        const data = await battleModel.aggregate([
            {
                $sort: {
                    "expire.id": 1,
                },
            },
        ]);
        res.status(200).json({
            success: true,
            data: {
                length: data.length,
                battles: data,
            },
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error,
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
                    error: "Battle Not Found !",
                });
            }
            const { auth } = data;
            if (auth?.roomId || auth?.roomPass) {
                return res.status(400).json({
                    success: false,
                    error: "Already Hosted!",
                });
            }
        }
        catch (error) {
            console.log(error);
            return res.status(404).json({
                success: false,
                error: "Battle Not Found !",
            });
        }
        await battleModel.findOneAndUpdate({ _id: battle }, {
            auth: {
                roomId,
                roomPass,
            },
            status: "live",
        }, { returnOriginal: false });
        res.status(200).json({
            success: true,
            data: "updated Successfully",
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error,
        });
    }
};
export const publishPositions_C = async (req, res) => {
    const { battle, positions } = req.body;
    if (!(battle && positions)) {
        return res.status(400).json({
            success: false,
            error: "Invalid Pased data",
        });
    }
    try {
        const updatedBattle = await battleModel.findOneAndUpdate({ _id: battle }, {
            positions,
        }, { returnOriginal: false });
        return res.status(200).json({
            success: true,
            data: updatedBattle,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message ? error.message : error,
        });
    }
};
export const distributePrizes_C = async (req, res) => {
    const { battle, position } = req.body;
    if (!position || +position > 3 || +position < 1) {
        return res.status(400).json({
            success: false,
            error: "invlaid position given"
        });
    }
    try {
        const verifiedBattle = await battleModel.findOne({ _id: battle });
        if (!verifiedBattle) {
            throw new Error("Battle not found");
        }
        if (verifiedBattle.status === "completed") {
            throw new Error("Already distributed");
        }
        if (verifiedBattle.positions.length < 1) {
            throw new Error("Positions not declared yet");
        }
        ;
        const firstTeam = verifiedBattle.positions[position - 1];
        if (firstTeam && firstTeam.length > 0) {
            const indexOfUserNameTeam = verifiedBattle.teams.findIndex((teamArr) => teamArr.includes(firstTeam[0]));
            if (indexOfUserNameTeam === -1) {
                throw new Error(`${firstTeam} not registered in battle`);
            }
            const order = await orderModel.findOne({
                createBy: verifiedBattle.teamswithUserName[indexOfUserNameTeam][0]
            });
            if (!order) {
                throw new Error("Order not found");
            }
            const fetchRes = await fetch("http://127.0.0.1:5000/transaction/create/cr/byadmin", {
                method: "POST",
                headers: {
                    authorization: "#*${dheeraj.eow.dev}*:)",
                    apikey: "123@edgeofwaresports.com",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user: order.userId,
                    battle: verifiedBattle._id,
                    value: verifiedBattle.winning[`_${position}`],
                }),
            });
            const data = await fetchRes.json();
            console.log(data);
            if (!data.success) {
                throw new Error(data.error || "Failed to distribute prize");
            }
        }
        else {
            await battleModel.updateOne({ _id: verifiedBattle._id }, {
                _1: 0
            });
            throw new Error(position + " position is empty");
        }
        ;
        if (position === 1) {
            await battleModel.updateOne({ _id: verifiedBattle._id }, {
                _1: verifiedBattle.winning[`_1`]
            });
        }
        if (position === 2) {
            await battleModel.updateOne({ _id: verifiedBattle._id }, {
                _2: verifiedBattle.winning[`_2`]
            });
        }
        if (position === 3) {
            await battleModel.updateOne({ _id: verifiedBattle._id }, {
                _3: verifiedBattle.winning[`_3`]
            });
        }
        const updatedBattle = await battleModel.findOne({ _id: verifiedBattle._id });
        if (updatedBattle && updatedBattle._1 && updatedBattle._2 && updatedBattle._3) {
            console.log("kdjasfkjhasdjfhwejkhfj");
            await battleModel.updateOne({ _id: verifiedBattle._id }, {
                status: "completed"
            });
        }
        return res.status(200).json({
            success: true,
            data: "Prize distributed",
        });
    }
    catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message || error,
        });
    }
};
//# sourceMappingURL=battle.controller.js.map