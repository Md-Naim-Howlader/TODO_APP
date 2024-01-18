import { useContext, useState } from "react";
import "./todo.css";
import { FaTrash } from "react-icons/fa6";
import { TodoContext } from "../../Context/TodoContext";
import { toast } from "react-toastify";
const Todo = ({ todo }) => {
  const { id, title, description } = todo;
  const { dispatch, removeTodo, editTodo } = useContext(TodoContext);

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

  // edit and save section
  const [editToggle, setEditToggle] = useState(false);
  const [todoTitle, setTodoTitle] = useState(title);
  const [todoDescription, setTodoDescription] = useState(description);

  const handleEditTodo = () => {
    setEditToggle(!editToggle);
  };
  const handleTitleChange = (e) => {
    setTodoTitle(e.target.value);

    editTodo(dispatch, { ...todo, title: e.target.value });
  };
  const handleDescriptionChange = (e) => {
    setTodoDescription(e.target.value);
    editTodo(dispatch, { ...todo, description: e.target.value });
  };
  return (
    <div className="todoItem">
      {editToggle ? (
        <div>
          <div>
            <label htmlFor="title">Title</label>
            <input
              onChange={handleTitleChange}
              value={todoTitle}
              name="title"
              type="text"
              id="title"
            />
          </div>
          <div>
            <label>Description</label>
            <textarea
              onChange={handleDescriptionChange}
              value={todoDescription}
              name="description"
              id=""
              rows="3"
            ></textarea>
          </div>
        </div>
      ) : (
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div>
            <input type="checkbox" name="" id="" />
          </div>
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      )}
      <div className="deleteAndEditButton">
        <button onClick={handleEditTodo} className="edit">
          {editToggle ? "Save Changes" : "Edit"}
        </button>

        <button
          className="delete"
          onClick={() => handleDelete(id)}
          title="Remove Todo"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default Todo;
