import { createSlice } from "@reduxjs/toolkit";
import {
  addTodoReducer,
  removeTodoReducer,
  updateTodoReducer,
} from "./reducers";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: addTodoReducer,
    removeTodo: removeTodoReducer,
    updateTodo: updateTodoReducer,
  },
});

// sending individual functionality vale from todoslice.actions yh component m kaam ayega
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

// exporting reducer for store
// So our store can know all the reducers we've created.
// store need to know this info
export default todoSlice.reducer;
