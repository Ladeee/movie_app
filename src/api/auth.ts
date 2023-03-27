// ---------- import internal dependencies ------------
import { instance } from "./instance";

export interface LoginRequest {
  email: string;
  password: string;
}

/**
 * Handle user login
 * @param data
 * @returns
 */
export const loginUser = async (data: LoginRequest) => {
  return instance({
    url: `/user/login`,
    data,
    method: "POST",
  });
};
