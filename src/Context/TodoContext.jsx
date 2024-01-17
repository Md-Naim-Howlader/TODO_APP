import { useEffect, useReducer } from "react";
import { createContext } from "react";
import { reducer } from "../Components/reducer/reducer";
import { initialState } from "../Components/initialState/initialState";
import { addTodo, removeTodo } from "./../Components/reducer/actions";

export const TodoContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }, [state.todos]);

  const values = {
    state,
    todos: state.todos,
    dispatch,
    addTodo,
    removeTodo,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default ContextProvider;
