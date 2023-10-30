import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  currentlyEdited: null,
  items: [],
};

export const componentsSlice = createSlice({
  name: "components",
  initialState,
  reducers: {
    addComponent: (state, action) => {},
    updateComponent: (state, action) => {},
    removeComponent: (state, action) => {},
    setEditedComponent: (state, action) => {},
  },
});

// export const componentsActions = componentsSlice.actions;
// export const componentsReducer = componentsSlice.reducer;

const { addComponent, updateComponent, removeComponent, setEditedComponent } =
  componentsSlice.actions;

export const componentsActions = {
  addComponent,
  updateComponent,
  removeComponent,
  setEditedComponent,
};
export const componentsReducer = componentsSlice.reducer;
