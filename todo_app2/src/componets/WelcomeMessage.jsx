import { useContext } from "react";
import Todoitmess from "../store/todo-items-store";
const WelcomeMassage = () => {
  const contextObj = useContext(Todoitmess);
  const todoitem = contextObj.items;
  return todoitem.length === 0 && <p>Enjoy Your Day!</p>;
};

export default WelcomeMassage;
