import PropTypes from 'prop-types';

function Trainee(props) {

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