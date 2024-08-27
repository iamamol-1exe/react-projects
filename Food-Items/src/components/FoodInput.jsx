import styles from "./FoodInput.module.css";
const FoodInput = ({ HandleOnKeyDown }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter the other FoodItem"
        className={styles.input}
        onKeyDown={HandleOnKeyDown}
      />
    </>
  );
};

export default FoodInput;
