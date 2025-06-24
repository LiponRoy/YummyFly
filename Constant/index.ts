import { Restaurant } from "@/Type";
export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Pizza Palace",
    location: "Dhanmondi",
    rating: 4.5,
    cuisines: ["Italian", "Fast Food"],
    deliveryFee: 50,
    isOpen: true,
    estimatedDeliveryTime: "30-40 mins",
    imageUrl: "/myFood.jpg",
    foods: [
      {
        id: 101,
        name: "Margherita Pizza",
        description: "Classic pizza with tomato, mozzarella, and basil",
        price: 550,
        category: "Pizza",
        isAvailable: true,
        isVeg: true,
        calories: 800,
        imageUrl: "/myFood.jpg"
      },
      {
        id: 102,
        name: "BBQ Chicken Pizza",
        description: "Tangy BBQ sauce, grilled chicken, onions, and cheese",
        price: 750,
        category: "Pizza",
        isAvailable: true,
        isVeg: false,
        calories: 950,
        imageUrl: "/myFood.jpg"
      },
      {
        id: 103,
        name: "Veggie Supreme Pizza",
        description: "Loaded with mushrooms, bell peppers, and olives",
        price: 670,
        category: "Pizza",
        isAvailable: true,
        isVeg: true,
        calories: 720,
        imageUrl: "/myFood.jpg"
      }
    ]
  },
  {
    id: 2,
    name: "Burger House",
    location: "Banani",
    rating: 4.2,
    cuisines: ["American", "Fast Food"],
    deliveryFee: 40,
    isOpen: false,
    estimatedDeliveryTime: "25-35 mins",
    imageUrl: "/myFood.jpg",
    foods: [
      {
        id: 201,
        name: "Classic Beef Burger",
        description: "Juicy beef patty with lettuce, tomato, and house sauce",
        price: 350,
        category: "Burger",
        isAvailable: true,
        isVeg: false,
        calories: 700,
        imageUrl: "/images/beef-burger.jpg"
      },
      {
        id: 202,
        name: "Cheesy Chicken Burger",
        description: "Fried chicken breast with melted cheese and mayo",
        price: 320,
        category: "Burger",
        isAvailable: false,
        isVeg: false,
        calories: 680,
        imageUrl: "/myFood.jpg"
      },
      {
        id: 203,
        name: "Spicy Veg Burger",
        description: "Spicy veg patty with lettuce and creamy sauce",
        price: 290,
        category: "Burger",
        isAvailable: true,
        isVeg: true,
        calories: 650,
        imageUrl: "/myFood.jpg"
      }
    ]
  },
  {
    id: 3,
    name: "Sushi World",
    location: "Gulshan",
    rating: 4.8,
    cuisines: ["Japanese", "Seafood"],
    deliveryFee: 70,
    isOpen: true,
    estimatedDeliveryTime: "40-50 mins",
    imageUrl: "/myFood.jpg",
    foods: [
      {
        id: 301,
        name: "Salmon Nigiri",
        description: "Fresh salmon over vinegared rice",
        price: 900,
        category: "Sushi",
        isAvailable: true,
        isVeg: false,
        calories: 300,
        imageUrl: "/myFood.jpg"
      },
      {
        id: 302,
        name: "Tuna Maki Roll",
        description: "Tuna wrapped in seasoned rice and seaweed",
        price: 850,
        category: "Sushi",
        isAvailable: true,
        isVeg: false,
        calories: 280,
        imageUrl: "/myFood.jpgg"
      },
      {
        id: 303,
        name: "Avocado Sushi",
        description: "Creamy avocado in sticky rice and nori",
        price: 780,
        category: "Sushi",
        isAvailable: true,
        isVeg: true,
        calories: 260,
        imageUrl: "/myFood.jpg"
      }
    ]
  },
  {
    id: 4,
    name: "Biryani Express",
    location: "Mohammadpur",
    rating: 4.4,
    cuisines: ["Bangladeshi", "Mughlai"],
    deliveryFee: 30,
    isOpen: true,
    estimatedDeliveryTime: "35-45 mins",
    imageUrl: "/myFood.jpg",
    foods: [
      {
        id: 401,
        name: "Kacchi Biryani",
        description: "Traditional kacchi with tender mutton and fragrant rice",
        price: 420,
        category: "Biryani",
        isAvailable: true,
        isVeg: false,
        calories: 1200,
        imageUrl: "/myFood.jpg"
      },
      {
        id: 402,
        name: "Chicken Tehari",
        description: "Spicy chicken tehari served with salad",
        price: 380,
        category: "Biryani",
        isAvailable: true,
        isVeg: false,
        calories: 1100,
        imageUrl: "/myFood.jpg"
      },
      {
        id: 403,
        name: "Vegetable Pulao",
        description: "Light and fluffy rice with vegetables",
        price: 300,
        category: "Rice",
        isAvailable: true,
        isVeg: true,
        calories: 600,
        imageUrl: "/myFood.jpg"
      }
    ]
  },
  {
    id: 5,
    name: "Tandoori Flames",
    location: "Uttara",
    rating: 4.6,
    cuisines: ["Indian", "Grill"],
    deliveryFee: 45,
    isOpen: false,
    estimatedDeliveryTime: "30-40 mins",
    imageUrl: "/myFood.jpg",
    foods: [
      {
        id: 501,
        name: "Tandoori Chicken",
        description: "Grilled chicken marinated with Indian spices",
        price: 480,
        category: "Grill",
        isAvailable: true,
        isVeg: false,
        calories: 950,
        imageUrl: "/myFood.jpg"
      },
      {
        id: 502,
        name: "Paneer Tikka",
        description: "Chunks of paneer grilled with capsicum and spices",
        price: 420,
        category: "Grill",
        isAvailable: true,
        isVeg: true,
        calories: 650,
        imageUrl: "/myFood.jpg"
      },
      {
        id: 503,
        name: "Butter Naan",
        description: "Soft naan bread topped with butter",
        price: 70,
        category: "Bread",
        isAvailable: true,
        isVeg: true,
        calories: 250,
        imageUrl: "/myFood.jpg"
      }
    ]
  }
];

export const FavouriteCuisinesData = [
    {
      title: "Biryani",
      imageUrl: "/myFood.jpg",
    },
    {
      title: "Burger",
      imageUrl: "/myFood.jpg",
    },
    {
      title: "Pizza",
      imageUrl: "/myFood.jpg",
    },
    {
      title: "Chicken",
      imageUrl: "/myFood.jpg",
    },
    {
      title: "Fast Food",
      imageUrl: "/myFood.jpg",
    },
    {
      title: "Pasta",
      imageUrl: "/myFood.jpg",
    },
  ];
