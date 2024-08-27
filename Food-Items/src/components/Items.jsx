import styles from "./Items.module.css";
const Items = ({ FoodName, bought, handleByButtonClicked }) => {
  return (
    <>
      <li className={`list-group-item ${bought && "active"}`}>
        {FoodName}{" "}
        <button
          className={`${styles.button} btn btn-info active `}
          onClick={handleByButtonClicked}
        >
          buy
        </button>
      </li>
    </>
  );
};

export default Items;
