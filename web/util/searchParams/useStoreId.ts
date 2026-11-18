import { parseAsString, useQueryState } from "nuqs";
import { searchParamsKeys } from "./config";

export const DEFAULT_STORE_ID = "ALL";

const useStoreId = () => {
  const storeIdState = useQueryState(
    searchParamsKeys.storeId,
    parseAsString.withDefault(DEFAULT_STORE_ID),
  );

  return storeIdState;
};

export default useStoreId;
