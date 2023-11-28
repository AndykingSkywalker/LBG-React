import logo from "./logo.svg";
import "./App.css";
import Trainee from "./components/Trainee";
import ExtraInfo from "./components/ExtraInfo";
import ButtonTest from "./components/ButtonTest";
import trainees from "./data/trainees.json";

function App() {
  const traineesArray = [];

  for (const trainee of trainees) {
    console.log("Trainee:", trainee);
    traineesArray.push(
      <Trainee
        name={trainee.name}
        age={trainee.age}
        location={trainee.location}
      />
    );
  }

  return (
    <div>
      <h1>Meet the trainees</h1>
      {traineesArray}
    </div>
  );
}

export default App;
