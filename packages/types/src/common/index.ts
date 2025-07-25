/** function types */

export type Noop = () => void;

/** enums */

export enum Bool {
  BOOL_TRUE = "BOOL_TRUE",
  BOOL_FALSE = "BOOL_FALSE",
  BOOL_UNSPECIFIED = "BOOL_UNSPECIFIED",
}

export enum Country {
  COUNTRY_INDIA = "COUNTRY_INDIA",
}

export enum Currency {
  CURRENCY_INR = "CURRENCY_INR",
}

export enum CurrencyFormat {
  INR = "INR",
  USD = "USD",
}

/** types */

export type PageProps = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    name?: string;
  }>;
};
