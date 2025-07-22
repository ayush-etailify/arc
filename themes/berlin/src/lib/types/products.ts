import { Category } from "./categories";
import { Bool, Media } from "./common";

export enum ProductInventoryStatus {
  INVENTORY_STATUS_OUT_OF_STOCK = "INVENTORY_STATUS_OUT_OF_STOCK",
  INVENTORY_STATUS_IN_STOCK = "INVENTORY_STATUS_IN_STOCK",
}

export enum ProductType {
  PRODUCT_TYPE_REGULAR = "PRODUCT_TYPE_REGULAR",
  PRODUCT_TYPE_VARIATION = "PRODUCT_TYPE_VARIATION",
  PRODUCT_TYPE_COMBO = "PRODUCT_TYPE_COMBO",
}

export enum ProductStatus {
  PRODUCT_STATUS_DRAFT = "PRODUCT_STATUS_DRAFT",
  PRODUCT_STATUS_LIVE = "PRODUCT_STATUS_LIVE",
  PRODUCT_STATUS_ARCHIVE = "PRODUCT_STATUS_ARCHIVE",
}

export type ProductPrice = {
  max_retail_price: string;
  cost_price?: string;
  selling_price?: string;
};

export type ProductVariationItem = {
  id: string;
  name: string;
  value: string;
};

export type ProductVariationGroupOption = {
  variation: ProductVariationItem;
  selected: Bool;
};

export type ProductVariationGroup = {
  uuid: string;
  name: string;
  variations: ProductVariationGroupOption[];
};

export type ProductSKU = {
  max_retail_price: string;
  cost_price?: string;
  selling_price?: string;
  inventory_status: ProductInventoryStatus;
  uuid?: string;
  id?: string;
  product_id?: string;
  media?: Media[];
  variations?: ProductVariationItem[];
};

export type Product = {
  name: string;
  product_type: ProductType;
  product_status: ProductStatus;
  discount_applicable: Bool;
  skus: ProductSKU[];
  uuid?: string;
  slug: string;
  description?: string;
  category_id?: string;
  tax_category_id?: string;
  category?: Category;
  selected_variation_groups?: ProductVariationGroup[];
};
