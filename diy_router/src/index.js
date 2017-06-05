import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div>
            <Link path="/javascript">JavaScript</Link>
            <Link path="/haskell">Haskell</Link>
            <Link path="/coffeescript">CoffeeScript</Link>
            <hr />
        </div>
    )
}

const Link = (props) => {
    return null;
}

const JavaScript = () => <p>A high-level, dynamic, untyped, and interpreted programming language.</p>
const Haskell = () => <p>A standardized, general-purpose purely functional programming language, with non-strict semantics and strong static typing.</p>
const CoffeeScript = () => <p>A programming language that transpiles into JavaScript, so we'll be redirecting there in 3.</p>

ReactDOM.render(<App />, document.getElementById('root'));
