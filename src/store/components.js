import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  currentlyEdited: null,
  items: [],
};

export const componentsSlice = createSlice({
  name: "components",
  initialState,
  reducers: {
    addComponent: (state, action) => {
      state.items.push(action.payload);
      state.currentlyEdited = action.payload;
    },
    updateComponent: (state, action) => {
      const componentToUpdate = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (componentToUpdate) {
        Object.assign(componentToUpdate, action.payload);
        state.currentlyEdited = null;
      }
    },
    removeComponent: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.currentlyEdited = null;
    },
    setEditedComponent: (state, action) => {
      state.currentlyEdited = action.payload;
    },
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
