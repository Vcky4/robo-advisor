import { model, Schema, models, } from 'mongoose';

const riskScoreSchema = new Schema({
    riskScore: Number,
    nigerianStock: Number,
    foriengnStock: Number,
    techStock: Number,
    emergingStock: Number,
    nigerianBond: Number,
    foriengnBond: Number,
    commodity: Number,
    realEstate: Number,
    tbills: Number,
    alternative: Number,
});

const RiskScore = models.RiskScore || model('RiskScore', riskScoreSchema);

export default RiskScore;