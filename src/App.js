import { useState, useEffect } from 'react';
import './App.css';

// https://www.youtube.com/watch?v=b9eMGE7QtTk&t=2318s

// Component Person
const Person = (props) => {
    return (
        <>
            <h1>Name: {props.name}</h1>
            <h2>Last Name: {props.lastName}</h2>
            <h2>Age: {props.age}</h2>
        </>
    );
};

// Component Button
const Button = () => {

    // use state to control de counter value when some button is pressed
    const [counter, setCounter] = useState(0);

    // use effect to be executed as soon as the page is loaded
    useEffect(() => {
        setCounter(0);
    }, []);

    return (
        <>
            <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
            <h1>{counter}</h1>
            <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
        </>
    );
};

// App
const App = () => {

    return (
        <div className="App">
            <Person name='Paulo' lastName='Giovani' age={47} />
            <br/>
            <Button />
        </div>
    );
};

export default App;
