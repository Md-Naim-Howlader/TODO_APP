import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from "./actionsType";

export const addTodo = (dispatch, todo) => {
  dispatch({ type: ADD_TODO, payload: todo });
};
export const removeTodo = (dispatch, id) => {
  dispatch({ type: REMOVE_TODO, payload: id });
};

export const editTodo = (dispatch, todo) => {
  dispatch({ type: EDIT_TODO, payload: todo });
};
