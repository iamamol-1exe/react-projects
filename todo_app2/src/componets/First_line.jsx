import { useRef } from "react";
import { useContext } from "react";
import Todoitmess from "../store/todo-items-store";
import { MdOutlineNoteAdd } from "react-icons/md";
function First_line() {
  const contextObj = useContext(Todoitmess);
  const newItem = contextObj.addNewitem;

  let noOfUpdate = useRef(0);
  let todoNameElement = useRef();
  let todoDateElement = useRef();
  let dueDate;
  let todoName;
  const handleButtonClicked = (event) => {
    todoName = todoNameElement.current.value;
    dueDate = todoDateElement.current.value;
    newItem(todoName, dueDate);
    noOfUpdate.current += 1;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
  };

  return (
    <>
      <div className="container ">
        <div className="row kg-row">
          <div className="col">
            <input
              type="text"
              ref={todoNameElement}
              placeholder="Enter the Task"
            />
          </div>
          <div className="col">
            <input
              type="date"
              ref={todoDateElement}
              placeholder="Enter the Date"
            />
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-success kg-button"
              onClick={handleButtonClicked}
            >
              <MdOutlineNoteAdd />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default First_line;
