import type {
  Category,
  Product,
  SDKConfig,
  SearchParams,
  SearchResponse,
} from "../types";
import { ApiClient } from "../utils/api-client";

export class StoreModule {
  constructor(
    private apiClient: ApiClient,
    private config: SDKConfig
  ) {}

  products = {
    getProductBySlug: async (slug: string) => {
      const response = await this.apiClient
        .instance()
        .get(`/store_svc/v1/products/${slug}`);

      return response.data as Product;
    },
  };

  categories = {
    searchCategories: async ({ page = 0, size = 10 }: SearchParams) => {
      const response = await this.apiClient
        .instance()
        .put(
          `/store_svc/v1/stores/${this.config.storeSlug}/categories/search`,
          {
            page,
            size,
          }
        );

      return response.data as SearchResponse<Category>;
    },
    searchCategoryProducts: async (
      slug: string,
      { page = 0, size = 10 }: SearchParams
    ) => {
      const response = await this.apiClient
        .instance()
        .put(`/store_svc/v1/categories/${slug}/products/search`, {
          // shouldn't there be a store-slug in the endpoint?
          page,
          size,
        });

      return response.data as SearchResponse<Product>;
    },
  };
}
