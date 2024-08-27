import Item from "./Item";

function List({ FoodItems }) {
  if (FoodItems.length === 0) {
    return <h3>I am Still hungry</h3>;
  }

  return (
    <>
      <ul className="list-group">
        {FoodItems.map((item) => (
          <Item key={item} FoodItems={item}></Item>
        ))}
      </ul>
    </>
  );
}
export default List;
