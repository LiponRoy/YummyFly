export interface Food {
  id: number;
  name: string;
  description: string;
  price: number;
  discountPercent?:number | undefined;
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
  discountPercent?:number | undefined;
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
   discountPercent?:number | undefined;
  imageUrl: string;
  estimatedDeliveryTime: string;
  estimatedTime?: string;
  discountText?: string;
  tag?: string;
}