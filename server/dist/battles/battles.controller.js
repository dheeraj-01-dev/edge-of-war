import jwt from "jsonwebtoken";
import battleModel from "./battles.model.js";
const jwt_secret = process.env.JWT_SECRET_STR;
export const getAllBattles = async (req, res) => {
    const { authorization } = req.headers;
    try {
        if (authorization && jwt_secret) {
            const decodedToken = jwt.verify(authorization, jwt_secret);
            const { userName } = decodedToken;
            const battle = await battleModel.aggregate([
                {
                    $addFields: {
                        tmpOrder: {
                            $rand: {},
                        },
                    },
                },
                {
                    $sort: {
                        tmpOrder: 1,
                    },
                },
                {
                    $match: {
                        $nor: [
                            {
                                teams: {
                                    $elemMatch: {
                                        $elemMatch: {
                                            $eq: userName,
                                        },
                                    },
                                },
                            },
                        ],
                    },
                },
            ]);
            res.status(200).json({
                success: true,
                length: battle.length,
                data: battle,
            });
        }
        else {
            const battle = await battleModel.aggregate([
                {
                    $addFields: {
                        tmpOrder: {
                            $rand: {},
                        },
                    },
                },
                {
                    $sort: {
                        tmpOrder: 1,
                    },
                },
            ]);
            res.status(200).json({
                success: true,
                length: battle.length,
                data: battle,
            });
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "something went wrong!",
        });
    }
};
//# sourceMappingURL=battles.controller.js.map