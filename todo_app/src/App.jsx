import "./App.css";
import Header from "./componets/Header";
import First_line from "./componets/First_line";
import Second_line from "./componets/Second_line";
import Third_line from "./componets/Third_line";
function App() {
  return (
    <>
      <center className="todo-container">
        <Header></Header>
        <div className="todo-iteam">
          <First_line></First_line>

          <Second_line />
          <Third_line />
        </div>
      </center>
    </>
  );
}
export default App;
