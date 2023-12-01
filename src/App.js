import "./App.css";
import Trainee from "./components/Trainee";
import trainees from "./data/trainees.json";
import ButtonTest from "./components/ButtonTest";
import Counter from "./components/Counter";
import King from "./components/King";
import KingSolution from "./components/KingsSolution";
import PokemonFunction from "./components/Pokemon";
import PostRequest from "./components/GetMessages";

function App() {
  
  return (
    <div>
     {/* <KingSolution />  */}
     {/* <PokemonFunction /> */}
     <PostRequest />
    </div>
  );
}

export default App;
