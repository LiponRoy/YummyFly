import mongoose, {Document } from 'mongoose';
// Food item interface
export interface IFood {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  isAvailable: boolean;
  isVeg: boolean;
  calories: number;
  imageUrl: string;
  cartQuantity: number;
}

// More Info interface
export interface IMoreInfo {
  imageUrl: string;
  fullLocation: string;
  aboutDeliveryFee: string;
  aboutMinimumOrder: string;
  OpeningHours: string[];
}



export interface IAvailableDeals {
  id: number;
  title: string;
  description: string;
  time: string;
  minOrder: string;
  Conditions?: string[];
}

// Mongoose ..........
export interface IFoodItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  isAvailable: boolean;
  isVeg: boolean;
  calories: number;
  imageUrl: string;
  cartQuantity: number;
} 

export interface IMoreInfo {
  imageUrl: string;
  fullLocation: string;
  aboutDeliveryFee: string;
  aboutMinimumOrder: string;
  OpeningHours: string[];
}

export interface IRestaurant extends Document {
  id: number;
  restaurantName: string;
  location: string;
  rating: number;
  ratingPersons: number;
  deliveryFee: number;
  deliveryTime: string;
  distance: number;
  cuisines: string[];
  discountPercent: number;
  minimumOrder: number;
  isOpen: boolean;
  imageUrl: string;
  moreInfo: IMoreInfo;
  foods: IFoodItem[];
}
