import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "hello world " }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // state take the initail value of state
      const todo = {
        id: nanoid(),
        text: action.payload.text, //payload ek object h
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    // updateTodo: (state, action) => {
    //   state.todos = state.todos.map((todo) => {
    //     if (action.payload.id === todo.id) todo.text = action.payload.text;// here the value is override
    //   });
  },
});

export const { addTodo, removeTodo } = todoSlice.actions; // sending individual functionality vale from todoslice.actions yh component m kaam ayega

export default todoSlice.reducer; //sending reducer to store taki it can know all the reducer we've created. store need to know this info
