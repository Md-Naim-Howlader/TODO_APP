import AddTodo from "../Components/AddTask/AddTodo";
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
