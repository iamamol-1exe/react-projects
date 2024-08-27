import List from "./componets/List";
import Heading from "./componets/Heading";
import "./App.css";
import List2 from "./componets/List2";

function App() {
  let FoodItems = ["dal", "roti", "amul butter", "rice", "baigan", "chips"];
  let bookNames = [
    "To Kill a Mockingbird",
    "1984",
    "Pride and Prejudice",
    "The Great Gatsby",
    "Moby-Dick",
    "War and Peace",
    "The Catcher in the Rye",
    "The Hobbit",
    "Ulysses",
    "Jane Eyre",
  ];
  return (
    <>
      <div className="Main-container">
        <Heading></Heading>

        <List FoodItems={FoodItems}></List>
      </div>

      <div className="Main-container">
        <h1>Books Name</h1>
        <List2 bookName={bookNames}></List2>
      </div>
    </>
  );
}
export default App;
