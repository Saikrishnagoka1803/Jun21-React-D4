import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import scifi from "./Data/scifi.json";
import BookList from "./Components/BookList";
import FetchComments from "./Components/FetchComments";
//import AddComments from './Components/AddComments';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BookList books={scifi} />
        <FetchComments />
      </header>
    </div>
  );
}

export default App;
