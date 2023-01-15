import clientPromise from "../../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function add(req: NextApiRequest, res: NextApiResponse) {
    const { id,
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
};