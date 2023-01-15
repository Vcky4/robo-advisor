import { model, Schema, models, } from 'mongoose';

const riskScoreSchema = new Schema({
    id: String,
    riskScore: Number,
    nigerianStock: String,
    foriengnStock: String,
    techStock: String,
    emergingStock: String,
    nigerianBond: String,
    foriengnBond: String,
    commodity: String,
    realEstate: String,
    tbills: String,
    alternative: String,
});

const RiskScore = models.RiskScore || model('RiskScore', riskScoreSchema);

export default RiskScore;