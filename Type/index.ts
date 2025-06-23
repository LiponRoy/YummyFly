export interface Food {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  isAvailable: boolean;
  isVeg: boolean;
  calories: number;
  imageUrl: string;
}

export interface Restaurant {
  id: number;
  name: string;
  location: string;
  rating: number;
  cuisines: string[];
  deliveryFee: number;
  isOpen: boolean;
  estimatedDeliveryTime: string;
  imageUrl:string;
  foods: Food[];
}

export interface RestaurantCardProps {
  name: string;
  location?: string;
  cuisine?: string;
  rating?: number;
  reviews?: number;
  deliveryFee?: number;
  imageUrl: string;
  estimatedTime?: string;
  discountText?: string;
  tag?: string;
}