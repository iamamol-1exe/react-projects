import { useReducer } from "react";
import "./App.css";
import Header from "./componets/Header";
import WelcomeMassage from "./componets/WelcomeMessage";
import TodoItems from "./componets/TodoItems";
import First_line from "./componets/First_line";
import Todoitmess from "./store/todo-items-store";
const todoitemReducer = (currTodoItem, action) => {
  let newTodoItemsReducer = currTodoItem;
  if (action.type === "NEW_ITEM") {
    newTodoItemsReducer = [
      ...currTodoItem,
      { name: action.payload.itemName, date: action.payload.itemDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItemsReducer = currTodoItem.filter(
      (item) => item.name !== action.payload.todoName
    );
  }

  return newTodoItemsReducer;
};

function App() {
  // const [todoitem, setTodoItem] = useState([]);
  const [todoitem, dispatchTodoItems] = useReducer(todoitemReducer, []);
  const newItem = (itemName, itemDate) => {
    const newactionItem = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDate,
      },
    };
    dispatchTodoItems(newactionItem);

    /*setTodoItem((currValue) => [
      ...currValue,
      { name: itemName, date: itemDate },
    ]);*/
  };
  const handleDeleteItem = (todoName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        todoName,
      },
    };
    dispatchTodoItems(deleteItemAction);

    // console.log("item deleted");
    // const newTodoItems = todoitem.filter((item) => item.name !== todoName);
    // setTodoItem(newTodoItems);
  };
  return (
    <Todoitmess.Provider
      value={{
        items: todoitem,
        addNewitem: newItem,
        deleteItems: handleDeleteItem,
      }}
    >
      <center className="todo-container">
        <Header></Header>
        <First_line></First_line>
        <WelcomeMassage />
        <TodoItems key={todoitem.name}></TodoItems>
      </center>
    </Todoitmess.Provider>
  );
}
export default App;
