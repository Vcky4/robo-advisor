import clientPromise from "../../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "../../../utils/connectMongo";
import RiskScore from "../../../models/riskscore";

export default async function add(req: NextApiRequest, res: NextApiResponse) {
    try {
        const {
            riskScore,
            nigerianStock,
            foriengnStock,
            techStock, emergingStock,
            nigerianBond,
            foriengnBond,
            commodity,
            realEstate,
            tbills,
            alternative

        } = req.body;

        console.log('connecting to mongo')

        await connectMongo()

        console.log('connected to mongo')
        const newRiskScore = await RiskScore.create(req.body)

        res.status(200).json({ riskScore: newRiskScore, message: "success" });

    }
    catch (e) {
        console.error(e)
        res.status(500).json(e);
    }
};