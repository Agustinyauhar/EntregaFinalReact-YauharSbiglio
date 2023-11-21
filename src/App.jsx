import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App(){
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer className="introduccion" greeting={"Bienvenidos a Strike Zone Boots"} />
    </div>
  );
}

export default App

