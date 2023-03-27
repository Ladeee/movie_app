// ------------ import external dependencies -------------
import { useMutation } from "@tanstack/react-query";

// ---------- import internal dependencies -----------
import { loginUser, LoginRequest } from "../../../api/auth";

function useAuth() {
  const login = useMutation((req: LoginRequest) => loginUser(req));

  return {
    login,
  };
}

export default useAuth;
