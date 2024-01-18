import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from "./actionsType";

export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: [...state.todos].filter((todo) => todo.id !== payload),
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: [...state.todos].map((todo) => {
          if (todo.id === payload.id) {
            return payload;
          } else {
            return todo;
          }
        }),
      };
    default:
      return state;
  }
};
