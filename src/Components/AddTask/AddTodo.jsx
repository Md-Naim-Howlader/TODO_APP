import { useState, useContext } from "react";
import { TodoContext } from "../../Context/TodoContext";
import { toast } from "react-toastify";
import "./addTodo.css";
const AddTodo = () => {
  const { addTodo, dispatch } = useContext(TodoContext);
  const [inputData, setInputData] = useState({ title: "", description: "" });
  const { title, description } = inputData;

  let newObj = {
    ...inputData,
    id: new Date().getTime(),
  };

  const handlechange = (e) => {
    const value = e.target.value.trim();
    const fieldName = e.target.name;

    setInputData({ ...inputData, [fieldName]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      toast.success("Invalid Todo Title!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: 0,
        theme: "light",
      });
      return false;
    }
    if (!description) {
      toast.success("Invalid Todo Description!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: 0,
        theme: "light",
      });
      return false;
    }
    addTodo(dispatch, newObj);
    toast.success("Todo is added !", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: 0,
      theme: "light",
    });
    setInputData({ title: "", description: "" });
  };
  return (
    <div className="addTodo">
      <h2>Add Todo</h2>
      <form onSubmit={handleSubmit}>
        <label autoFocus htmlFor="title">
          Enter Todo Title:
        </label>
        <input
          autoFocus
          onChange={handlechange}
          value={title}
          type="text"
          name="title"
          id="title"
        />
        <label htmlFor="description">Description:</label>
        <textarea
          value={description}
          onChange={handlechange}
          name="description"
          rows={3}
          id="description"
        ></textarea>
        <div style={{ textAlign: "center" }}>
          <button type="submit">Add Todo</button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
