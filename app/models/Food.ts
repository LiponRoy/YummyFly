// models/Food.ts
import mongoose from 'mongoose';

const FoodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
}, { timestamps: true });

export const Food = mongoose.models.Food || mongoose.model('Food', FoodSchema);
