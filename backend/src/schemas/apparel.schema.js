import mongoose from 'mongoose';
import uuid from 'uuid';

const Schema = mongoose.Schema;
export const apparelSchema = new Schema({
  id: { type: String, default: uuid.v1 },
  title: String,
  attribute: String,
  color: String,
  description: String,
  price: Number,
  image: String,
  type: String
});

apparelSchema.index({ '$**': 'text' });
