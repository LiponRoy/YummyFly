
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { IFood } from "@/Type";


interface ICartStore {
    cartProducts: IFood[];
    totalQuantity: number;
    totalPrice: number;
    addItemToCart: (newItem: IFood) => void;
}

const useCartStore = create<ICartStore>()(
    devtools(persist(
        (set) => ({
            cartProducts: [],
            totalQuantity: 0,
            totalPrice: 0,
            addItemToCart: (newItem) => {
                set((state) => {
                    const itemIndex = state.cartProducts.findIndex(
                        (item) => item.id === newItem.id
                    );

                    if (itemIndex >= 0) {
                        const updatedCart = [...state.cartProducts];
                        const updatedItem = { ...updatedCart[itemIndex] };
                        updatedItem.cartQuantity += 1;
                        updatedCart[itemIndex] = updatedItem;
                        return {
                            ...state,
                            cartProducts: updatedCart,
                        };
                    } else {
                    
                        return {
                            ...state,
                            cartProducts: [
                                ...state.cartProducts,
                                { ...newItem, cartQuantity: 1 },
                            ],


                        };
                    }
                });
            },

        }),
        { name: "CartStore" }
    ), { name: 'CartStore', getStorage: () => localStorage })
);

export default useCartStore;