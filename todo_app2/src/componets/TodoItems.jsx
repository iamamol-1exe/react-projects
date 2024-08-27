import { useContext } from "react";
import Second_line from "./Second_line";
import Todoitmess from "../store/todo-items-store";
const TodoItems = () => {
  const contextObj = useContext(Todoitmess);
  const todoitem = contextObj.items;

  return (
    <>
      <div className="todo-iteam">
        {todoitem.map((item) => (
          <Second_line
            key={item.date}
            todoName={item.name}
            todoDate={item.date}
          />
        ))}
      </div>
    </>
  );
};
export default TodoItems;
