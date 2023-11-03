import { configureStore } from "@reduxjs/toolkit";
import { componentsReducer } from "./components";
const getStore = () =>
  configureStore({
    reducer: {
      components: componentsReducer,
    },
  });
// export type  RootState = ReturnType<typeof getStore.getState>
export default getStore;
