import { createSlice } from "@reduxjs/toolkit";

// state: Array of Obj - Obj:  { id: 197, todoTitle: "FE THA 27", isDone: false }
const initialState = [];

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      // payload will be 'todoTitle'
      let newItem = {
        id: new Date().getUTCMilliseconds(),
        todoTitle: action.payload,
        isDone: false,
      };
      return (state = [newItem, ...state]);
    },
    editTodo: (state, action) => {
      // payload will be obj: {id, newTitle}
      let { id, newTitle } = action.payload;
      let index = state.findIndex((todo) => todo.id === id);
      if (state[index].todoTitle === newTitle) return state;
      state[index].todoTitle = newTitle;
      return state;
    },
    changeStatus: (state, action) => {
      //payload will be 'id'
      let index = state.findIndex((todo) => todo.id === action.payload);
      state[index].isDone = true;
      return state;
    },
    deleteTodo: (state, action) => {
      //payload will be 'id'
      return (state = state.filter((todo) => todo.id !== action.payload));
    },
  },
});

export const { addTodo, editTodo, changeStatus, deleteTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
