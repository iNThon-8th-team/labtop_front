import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { navBarEnum } from "../models/navBarEnum";

// set 함수를 통해서만 상태를 변경할 수 있다
const useNavBarStore = create(
  persist(
    (set, get) => ({
      NavBarSelection: navBarEnum.DEFAULT,

      changeSelection: (input) => {
        set(() => ({ NavBarSelection: input }));
      },
    }),
    {
      name: "navStoragekey", // unique name
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export default useNavBarStore;
