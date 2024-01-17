import { useContext } from "react";
import { TodoContext } from "../../Context/TodoContext";
import "./todoList.css";
import Todo from "../Todo/Todo";

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  return (
    <div>
      <div className="todoList">
        {todos.length > 0 ? (
          todos && todos.map((todo) => <Todo key={todo.id} todo={todo} />)
        ) : (
          <div>
            <h2>No Todo Added Yet!</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
