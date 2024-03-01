import { nanoid } from "@reduxjs/toolkit";

// My Reducers functions
// Reducer function is a function that takes
// current state and an action,
// and updates the state based on that action.

export const addTodoReducer = (state, action) => {
  // Example:
  // state = Proxy<todos: []>
  // action = {type: "todo/addTodo", payload: input}

  // state have the current value of todos
  const newState = [...state.todos];
  const todo = {
    id: nanoid(), // generates a random string
    text: action.payload,
  };
  newState.push(todo);

  // Updating our state
  state.todos = newState;
};

export const removeTodoReducer = (state, action) => {
  const newState = state.todos.filter((todo) => todo.id !== action.payload);

  // Updating our state
  state.todos = newState;
};

export const updateTodoReducer = (state, action) => {
  const newState = state.todos.map((todo) => {
    if (action.payload.id === todo.id) todo.text = action.payload.text; // here the value is override
  });

  // Updating our state
  state.todos = newState;
};
