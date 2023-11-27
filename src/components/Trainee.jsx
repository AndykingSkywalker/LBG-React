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

export default Trainee;