import { useContext } from "react";
import "./todo.css";
import { FaTrash } from "react-icons/fa6";
import { TodoContext } from "../../Context/TodoContext";
import { toast } from "react-toastify";
const Todo = ({ todo }) => {
  const { id, title, description } = todo;
  const { removeTodo, dispatch } = useContext(TodoContext);

  const handleDelete = (id) => {
    removeTodo(dispatch, id);
    toast.success("Todo Was Deleted!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: 0,
      theme: "light",
    });
  };
  return (
    <div className="todoItem">
      <div>
        <input type="checkbox" name="" id="" />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="deleteButton">
        <button onClick={() => handleDelete(id)} title="Remove Todo">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default Todo;
