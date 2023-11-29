import { useState } from "react";


function Counter() {

    const [count, setCount] = useState(0);

    console.log("Count:", count);

    return ( 
        <div>
        <input type="number" readOnly value={count} />
        <br />
        <button onClick={() => setCount(count + 5)}>+5</button>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count * 0)}>RESET</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
        <button onClick={() => setCount(count - 5)}>-5</button>
    </div>

     );
}

export default Counter;