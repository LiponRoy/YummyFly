import { IAvailableDeals, } from "@/Type";

export const allCuisines = ["Biryani","Bangladeshi","Fast Food","Burger","Snacks","Traditional","Breakfast","Chicken","Pizza","Chinese","Sea Food","Dessert"];


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
export const DailyDealsData = [
  {
    id:1,
    discount:25,
    imageUrl: "/offer1.jpg",
  },
  {
    id:2,
    discount:10,
    imageUrl: "/offer2.jpg",
  },
  {
    id:3,
    discount:5,
    imageUrl: "/offer3.jpg",
  },
  {
    id:4,
    discount:30,
    imageUrl: "/offer4.jpg",
  },
  {
    id:5,
    discount:25,
    imageUrl: "/offer1.jpg",
  },
  {
    id:6,
    discount:5,
    imageUrl: "/offer3.jpg",

  },
];
export const availableDeals: IAvailableDeals[] = [
  {
    id: 1,
    title: "Buy 1 Get 1 Free",
    description: "Enjoy a delicious pizza and get another one absolutely free. ",
    time: "From Today TO Next 7 Days",
    minOrder: "Tk 599",
    Conditions:[
      "Valid for a minimum order of Tk599",
      "Valid for payment with Credit card, Credit or debit card",
      "For selected users only.",
      "Applicable for Delivery, Pick-Up.",
    ]
  },
  {
    id: 2,
    title: "20% Off on Burgers",
    description: "Craving burgers? Get 20% off on all burger items every Monday.",
    time: "From Today TO Next 7 Days",
    minOrder: "Tk 599",
    Conditions:[
      "Valid for a minimum order of Tk599",
      "Valid for payment with Credit card, Credit or debit card",
      "For selected users only.",
      "Applicable for Delivery, Pick-Up.",
    ]
  },
  {
    id: 3,
    title: "Free Dessert",
    description: "Order any combo meal and get a free dessert of your choice!",
    time: "From Today TO Next 7 Days",
    minOrder: "Tk 599",
    Conditions:[
      "Valid for a minimum order of Tk599",
      "Valid for payment with Credit card, Credit or debit card",
      "For selected users only.",
      "Applicable for Delivery, Pick-Up.",
    ]
  },
];
// Cuisines
export const Cuisines = [
  {
   id: 1,
    CuisinesName:"Biryani",
    imageUrl: "/br.jpg",
  },
  {
    id: 2,
    CuisinesName:"Chicken",
    imageUrl: "/chicken.jpg",
  },
  {
    id: 3,
    CuisinesName:"Pizza",
    imageUrl: "/pz.jpg",
  },
  {
    id: 4,
    CuisinesName:"Chinese",
    imageUrl: "/chinese.jpg",

  },
{
  id: 5,
    CuisinesName:"Burger",
    imageUrl: "/brg.jpg",

},
{
   id: 6,
    CuisinesName:"Dessert",
    imageUrl: "/firni.png",

}
];