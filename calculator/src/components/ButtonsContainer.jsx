import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
  const buttonsName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonsName.map((buttonsName) => (
        <button
          onClick={() => onButtonClick(buttonsName)}
          key={buttonsName}
          className={`${styles.buttons} btn btn-secondary ${
            buttonsName >= "C" ? "btn btn-danger" : ""
          } ${buttonsName >= "=" ? "btn btn-success" : ""} `}
        >
          {buttonsName}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
