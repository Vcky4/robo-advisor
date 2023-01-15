import clientPromise from "../../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const client = await clientPromise;
        const db = client.db("robo_advisor");

        const movies = await db
            .collection("RiskScore")
            .find({})
            .toArray();

        res.json(movies);
    } catch (e) {
        console.error(e);
    }
};