import "./App.css";
import Home from "./Pages/Home";
import ContextProvider from "./Context/TodoContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="container">
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Todo App</h1>
      <ContextProvider>
        <Home />
        <ToastContainer />
      </ContextProvider>
    </div>
  );
}

export default App;
