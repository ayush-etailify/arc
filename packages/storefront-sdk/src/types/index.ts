export interface SDKConfig {
  baseUrl: string;
  storeSlug: string;
  storeId: string;
  timeout?: number;
  isDevelopment?: boolean;
  onTokenRefresh?: (accessToken: string) => void;
  onAuthError?: () => void;
  onLogout?: () => void;
}

export interface TokenResponse {
  response: {
    access_token: string;
  };
}

export interface RefreshTokenRequest {
  request: {
    refresh_token: string | null;
  };
}

export interface ApiResponse<T = any> {
  data: T;
  success: boolean;
  message?: string;
}

// store

export enum Bool {
  BOOL_TRUE = "BOOL_TRUE",
  BOOL_FALSE = "BOOL_FALSE",
  BOOL_UNSPECIFIED = "BOOL_UNSPECIFIED",
}

export enum MediaType {
  MEDIA_TYPE_IMAGE = "MEDIA_TYPE_IMAGE",
  MEDIA_TYPE_VIDEO = "MEDIA_TYPE_VIDEO",
  MEDIA_TYPE_AUDIO = "MEDIA_TYPE_AUDIO",
  MEDIA_TYPE_DOCUMENT = "MEDIA_TYPE_DOCUMENT",
}

export enum MimeType {
  MIME_TYPE_INVALID = "MIME_TYPE_INVALID",
  MIME_TYPE_PDF = "MIME_TYPE_PDF",
  MIME_TYPE_JPEG = "MIME_TYPE_JPEG",
  MIME_TYPE_PNG = "MIME_TYPE_PNG",
  MIME_TYPE_MP4 = "MIME_TYPE_MP4",
  MIME_TYPE_SVG = "MIME_TYPE_SVG",
  MIME_TYPE_MP3 = "MIME_TYPE_MP3",
  MIME_TYPE_WAV = "MIME_TYPE_WAV",
  MIME_TYPE_DOCX = "MIME_TYPE_DOCX",
}

export type Media = {
  media_type: MediaType;
  mime_type: MimeType;
  media_name: string;
  media_public_url?: string;
};

export type SearchParams = {
  page?: number;
  size?: number;
  searchTerm?: string;
};

export type SearchResponse<T> = {
  response: T[];
  page_response: {
    total?: string;
    has_next_page?: boolean;
  };
};

export type Category = {
  name: string;
  uuid: string;
  slug: string;
  description: string;
  media?: Media | null;
  parent_category_id?: string;
  parent_category?: {
    uuid: string;
    name: string;
  } | null;
  version?: string;
  sub_categories: Category[];
};

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
