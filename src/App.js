import logo from './logo.svg';
import './App.css';
import Trainee from './components/Trainee';
import ExtraInfo from './components/ExtraInfo';
import ButtonTest from './components/ButtonTest';

function App() {
  return (
      <div>
        <Trainee name="Andrew" age="27" location="Bradford"/>
        <ExtraInfo hobby="Gaming"/>
        <ButtonTest/> 
        <Trainee name="Ember" age="5" location="Cat Bed"/>
        <ExtraInfo hobby="Meowing"/>
        <ButtonTest/> 
      </div>  
  );
}

export default App;
