// ------------- import external dependencies ------------
import { StateCreator } from "zustand";

// ------------ import internal dependencies -----------
import { LoggedInUserType } from "./type";

const intialState: Omit<LoggedInUserType, "updateUser"> = {
  user: {},
};

const createLoggedInUserSlice: StateCreator<LoggedInUserType> = (set) => ({
  ...intialState,
  updateUser(user: any) {
    return set(() => ({
      user,
    }));
  },
});

export default createLoggedInUserSlice;
