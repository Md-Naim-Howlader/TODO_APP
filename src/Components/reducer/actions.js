import { ADD_TODO, REMOVE_TODO } from "./actionsType";

export const addTodo = (dispatch, todo) => {
  dispatch({ type: ADD_TODO, payload: todo });
};
export const removeTodo = (dispatch, id) => {
  dispatch({ type: REMOVE_TODO, payload: id });
};
