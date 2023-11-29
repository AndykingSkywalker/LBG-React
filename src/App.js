import logo from "./logo.svg";
import "./App.css";
import Trainee from "./components/Trainee";
import trainees from "./data/trainees.json";
import KingsSolution from "./components/KingsSolution";
import ButtonTest from "./components/ButtonTest";
import Counter from "./components/Counter";
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
      <ButtonTest />
      <Counter/>
    </div>
  );
}

export default App;
