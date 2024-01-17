import { getDataFromLocalStorage } from "../../utils/getDataFromLocalStorage";

export const initialState = {
  todos: getDataFromLocalStorage(),
};
