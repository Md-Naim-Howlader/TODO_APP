import { ADD_TODO, REMOVE_TODO } from "./actionsType";

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

    default:
      return state;
  }
};
