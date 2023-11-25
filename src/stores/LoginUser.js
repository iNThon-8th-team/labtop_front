import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// set 함수를 통해서만 상태를 변경할 수 있다
const useUserStore = create(
  persist(
    (set, get) => ({
      isLogin: false,
      User: { email: "", username: "" },
      refreshToken: "",

      loginUser: (input) => {
        set(() => ({
          isLogin: true,
          User: { email: input.email, usename: input.username },
          refresh_token: input.refreshToken,
        }));
      },

      logoutUser: () => {
        set(() => ({
          isLogin: false,
          User: { email: "", username: "" },
          refreshToken: "",
        }));
        sessionStorage.removeItem("userStoragekey");
      },
    }),
    {
      name: "userStoragekey", // unique name
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export default useUserStore;
