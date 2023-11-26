import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// set 함수를 통해서만 상태를 변경할 수 있다
const useUserStore = create(
  persist(
    (set, get) => ({
      isLogin: false,
      User: {
        id: 0,
        email: "",
        username: "",
        isProfessor: false,
        isResearcher: false,
        introduction: "",
        profile: "",
      },

      loginUser: (input) => {
        set(() => ({
          isLogin: true,
          User: input,
        }));
      },

      logoutUser: () => {
        set(() => ({
          isLogin: false,
          User: {
            id: 0,
            email: "",
            username: "",
            isProfessor: false,
            isResearcher: false,
            introduction: "",
            profile: "",
          },
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
