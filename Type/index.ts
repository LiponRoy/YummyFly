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
  foods: Food[];
}