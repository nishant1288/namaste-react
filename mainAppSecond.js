import React from 'react';
import ReactDOM from 'react-dom';

const elem = <span>React Element</span>

const comp = (
    <h1>Component as an JS Object {elem}</h1>
)

const CompOne = () => {
    return (
        <h1>Hello Component One</h1>
    )
}

function ComThree() {
    return (
        <div>
            <h2>Hello Component Three</h2>
        </div>
    )
}

const CompTwo = () => (
    <div>
        {comp}
        <h1>Hello From Component Two</h1>
        <CompOne />
        <CompOne></CompOne>
        {CompOne()}
        <ComThree />
        {ComThree ()}
    </div>
)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CompTwo />)