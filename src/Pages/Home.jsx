import AddTodo from "../Components/AddTodo/AddTodo";
import TodoList from "../Components/Todo_List/TodoList";

const Home = () => {
  return (
    <div className="todoWrapper">
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default Home;
