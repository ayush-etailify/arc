import { sdk } from "../sdk-config";

export const isCustomerLoggedIn = () => {
  return sdk.auth.login.isCustomerLoggedIn();
};
