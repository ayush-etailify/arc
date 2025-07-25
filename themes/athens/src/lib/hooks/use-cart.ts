import { Product } from "@etailify/types";
import { isCustomerLoggedIn } from "../utils/common";
import { useCartStore } from "./use-cart-store";

export const useCart = () => {
  const {
    currentOrder,
    addItem,
    removeItem,
    clearCart,
    getTotal,
    hasActiveCart,
  } = useCartStore();

  const addToCart = (product: Product) => {
    if (isCustomerLoggedIn()) {
      // has active currentOrder?
      // N: 1. create new order  > 2. useCart [addTocart > useCartStore(state+LC)]
      // Y: 1. upsertCart > N:2
      // are the responses of createNewOrder<T>, upsertCart<T>, currentOrder<{order: T}> same?
    } else {
      addItem({
        product_id: product.uuid as string,
        product_type: product.product_type,
        quantity: "1",
        sku_id: product.skus[0].uuid as string,
        product: product,
        cost_price: product.skus[0].cost_price ?? "",
        max_retail_price: product.skus[0].max_retail_price ?? "",
        selling_price: product.skus[0].selling_price ?? "",
      });
    }
  };

  return {
    addToCart,
    removeItem,
    clearCart,
    getTotal,
    hasActiveCart,
    currentOrder,
    cartItems: currentOrder.products,
  };
};
