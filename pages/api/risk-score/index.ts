import { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "../../../utils/connectMongo";
import RiskScore from "../../../models/riskscore";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {


        console.log('connecting to mongo')

        await connectMongo()

        console.log('connected to mongo')
        console.log('finding risk scores')
        const newRiskScore = await RiskScore.find()
        console.log('found risk scores')

        res.status(200).json({ riskScore: newRiskScore, message: "success" });

    }
    catch (e) {
        console.error(e)
        res.status(500).json(e);
    }
};