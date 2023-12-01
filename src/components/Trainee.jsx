import PropTypes from 'prop-types';
import trainees from '../data/trainees.json';

function Trainee(props) {

    const traineesArray = [];

   for (const trainee of trainees) {
     console.log("Trainee:", trainee);
    traineesArray.push(
       <Trainee
         key={trainee.name + " " + trainee.age}
         name={trainee.name}
         age={trainee.age}
         location={trainee.location}
       />
     );
   }


    return (
        <div>
        <h1>About Me</h1>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Location: {props.location}</p>
        </div>
    );
}


Trainee.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    location: PropTypes.string,
}

export default Trainee;