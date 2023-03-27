// ------------ import external dependencies --------------
import create from "zustand";
import { persist } from "zustand/middleware";
import { mountStoreDevtool } from "simple-zustand-devtools";

// ----------- import internal dependencies ------------
import { LoggedInUserType } from "./type";
import createLoggedInUserSlice from "./loggedInuser";

/**
 * Global store level
 */
export const useStoreWrapper = create<LoggedInUserType>()(
  persist(
    (...a) => ({
      ...createLoggedInUserSlice(...a),
    }),
    {
      name: "nester-admin",
    }
  )
);

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Store", useStoreWrapper);
}
