export interface IFood {
  id: number;
  name: string;
  description: string;
  price: number;
  discountPercent?: number | undefined;
  category: string;
  isAvailable: boolean;
  isVeg: boolean;
  calories: number;
  imageUrl: string;
  cartQuantity?: number;
}

export interface IRestaurant {
  id: number;
  name: string;
  location: string;
  rating: number;
  cuisines: string[];
  deliveryFee: number;
  discountPercent?: number | undefined;
  isOpen: boolean;
  estimatedDeliveryTime: string;
  imageUrl: string;
  foods: IFood[];
}

export interface IRestaurantCardProps {
  name: string;
  location?: string;
  cuisine?: string;
  rating?: number;
  reviews?: number;
  deliveryFee?: number;
  discountPercent?: number | undefined;
  imageUrl: string;
  estimatedDeliveryTime: string;
  estimatedTime?: string;
  discountText?: string;
  tag?: string;
}

export interface IAvailableDeals {
  id: number;
  title: string;
  description: string;
  time: string;
  minOrder: string;
  Conditions?: string[];
}
