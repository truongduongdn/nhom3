import React from 'react';
import ChauComponent from './ChauComponent';

function MyComponent(props) {
    const {count, setCountA }= props;
    return (
        <div>
            <h1>My Component {count}</h1>
            <button onClick={() => setCountA(count + 1)}>Click</button>
            {/* <button onClick={() => setCountA(pred + 1)}>Click</button> */}

            

            {/* <ChauComponent count ={count}/> */}
        </div>
    );
}
export default MyComponent;