import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CustomerCurrentOrder, CustomerOrderProduct } from "@etailify/types";

export type CartStore = {
  currentOrder: CustomerCurrentOrder;
  addItem: (item: CustomerOrderProduct) => void;
  removeItem: (item: CustomerOrderProduct) => void;
  clearCart: () => void;
  getTotal: () => number;
  hasActiveCart: () => boolean;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      currentOrder: {
        products: [],
      },
      addItem: (item) => {
        set((state) => ({
          currentOrder: {
            ...state.currentOrder,
            products: [...state.currentOrder.products, item],
          },
        }));
      },
      removeItem: (item) => {
        set((state) => ({
          currentOrder: {
            ...state.currentOrder,
            products: state.currentOrder.products.filter(
              (p) => p.product_id !== item.product_id
            ),
          },
        }));
      },
      clearCart: () => {
        set({ currentOrder: { products: [] } });
      },
      hasActiveCart: () => {
        return Boolean(get().currentOrder.uuid);
      },
      getTotal: () => {
        return get().currentOrder.products.reduce(
          (acc, item) => acc + parseFloat(item.selling_price),
          0
        );
      },
    }),
    {
      name: "cartStore",
      partialize: (state) => ({
        currentOrder: state.currentOrder,
      }),
    }
  )
);
