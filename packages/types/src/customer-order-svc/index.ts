import { Product, ProductType } from "@/store-svc/products";

export type Customer = {
  uuid: string;
  order_id: string;
  customer_id: string;
  customer: any;
  addresses: [];
};

export type CustomerOrderBill = {
  product_total: string;
  tax_total: string;
  discount_total: string;
  charge_total: string;
  gross_total: string;
  net_total: string;
};

export type CustomerOrderProduct = {
  product_id: string;
  product_type: ProductType;
  quantity: string;
  sku_id: string; // sku uuid
  instructions?: string;
  product: Product;
  cost_price: string;
  max_retail_price: string;
  selling_price: string;
  // need explaintation for the following
  // tax?: string;
  // discount?: string;
  // gross_price?: string;
  // net_price?: string;
};

export type CustomerCurrentOrder = {
  products: CustomerOrderProduct[];
  cancelled_products?: any[];
  uuid?: string;
  order_status?: string;
  bill?: CustomerOrderBill;
  customer?: Customer;
};
