import { configureStore } from "@reduxjs/toolkit";
import { componentsReducer } from "./components";
const getStore = () =>
  configureStore({
    reducer: {
      components: componentsReducer,
    },
  });
export default getStore;
