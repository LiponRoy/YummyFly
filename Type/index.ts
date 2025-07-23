// export interface IFood {
//   id: number;
//   name: string;
//   description: string;
//   price: number;
//   discountPercent?: number | undefined;
//   category: string;
//   isAvailable: boolean;
//   isVeg: boolean;
//   calories: number;
//   imageUrl: string;
//   cartQuantity: number;
// }

// export interface IRestaurant {
//   id: number;
//   name: string;
//   location: string;
//   rating: number;
//   cuisines: string[];
//   deliveryFee: number;
//   discountPercent?: number | undefined;
//   isOpen: boolean;
//   estimatedDeliveryTime: string;
//   imageUrl: string;
//   foods: IFood[];
// }

// export interface IRestaurantCardProps {
//   name: string;
//   location?: string;
//   cuisine?: string;
//   rating?: number;
//   reviews?: number;
//   deliveryFee?: number;
//   discountPercent?: number | undefined;
//   imageUrl: string;
//   estimatedDeliveryTime: string;
//   estimatedTime?: string;
//   discountText?: string;
//   tag?: string;
// }

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

// Restaurant interface
export interface IRestaurant {
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
  foods: IFood[];
}


export interface IAvailableDeals {
  id: number;
  title: string;
  description: string;
  time: string;
  minOrder: string;
  Conditions?: string[];
}
