import { IFoodItem, IRestaurant } from '@/Type';
import mongoose, { Schema, Document } from 'mongoose';


const FoodItemSchema = new Schema<IFoodItem>({
  id: Number,
  name: String,
  description: String,
  price: Number,
  category: String,
  isAvailable: Boolean,
  isVeg: Boolean,
  calories: Number,
  imageUrl: String,
  cartQuantity: Number,
});

const RestaurantSchema = new Schema<IRestaurant>({
  id: Number,
  restaurantName: String,
  location: String,
  rating: Number,
  ratingPersons: Number,
  deliveryFee: Number,
  deliveryTime: String,
  distance: Number,
  cuisines: [String],
  discountPercent: Number,
  minimumOrder: Number,
  isOpen: Boolean,
  imageUrl: String,
  foods: [FoodItemSchema],
});

export default mongoose.models.Restaurant || mongoose.model<IRestaurant>('Restaurant', RestaurantSchema);
