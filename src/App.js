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

  // const traineesArray = [];

  // for (const trainee of trainees) {
  //   console.log("Trainee:", trainee);
  //   traineesArray.push(
  //     <Trainee
  //       key={trainee.name + " " + trainee.age}
  //       name={trainee.name}
  //       age={trainee.age}
  //       location={trainee.location}
  //     />
  //   );
  // }

  

  return (
    <div>
     {/* <KingSolution />  */}
     {/* <PokemonFunction /> */}
     <PostRequest />
    </div>
  );
}

export default App;
