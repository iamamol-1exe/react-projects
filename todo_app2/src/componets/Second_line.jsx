/* eslint-disable react/prop-types */
import { useContext } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import Todoitmess from "../store/todo-items-store";
function Second_line(props) {
  const contextObj = useContext(Todoitmess);
  const onDeleteClick = contextObj.deleteItems;
  return (
    <>
      <div className="container ">
        <div className="row kg-row">
          <div className="col">{props.todoName}</div>
          <div className="col">{props.todoDate}</div>
          <div className="col">
            <button
              type="button"
              className="btn btn-danger kg-button"
              onClick={() => onDeleteClick(props.todoName)}
            >
              <FaDeleteLeft />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Second_line;
