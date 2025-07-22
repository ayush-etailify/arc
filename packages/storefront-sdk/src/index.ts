import { StoreModule } from "./modules/store";
import { SDKConfig } from "./types";
import { ApiClient } from "./utils/api-client";

export class EtailifyStorefrontSDK {
  private apiClient: ApiClient;

  public readonly store: StoreModule;

  constructor(config: SDKConfig) {
    this.apiClient = new ApiClient(config);
    this.store = new StoreModule(this.apiClient);
  }

  public get client() {
    return this.apiClient.instance();
  }
}

// Export types for consumers
export type {
  SDKConfig,
  Product,
  Category,
  SearchParams,
  SearchResponse,
  ProductSKU,
  ProductPrice,
  Media,
} from "./types";

// Default export
export default EtailifyStorefrontSDK;
