import React from 'react';
import ReactDOM from 'react-dom';
const { history } = window;

const JavaScript = () => <p>A high-level, dynamic, untyped, and interpreted programming language.</p>
const Haskell = () => <p>A standardized, general-purpose purely functional programming language, with non-strict semantics and strong static typing.</p>
const CoffeeScript = () => <p>A programming language that transpiles into JavaScript, so we'll be redirecting there in 3.</p>

const Link = (props) => {
    const handleClick = (event) => {
        event.preventDefault();
        history.pushState({}, null, `${props.path}`)
    }
    return (
        <div>
            <a href="" onClick={handleClick} >{props.children}</a>
        </div>
    );
}

// Route goes here

const App = () => {
    return (
        <div>
            <Link path="/javascript">JavaScript</Link>
            <Link path="/haskell">Haskell</Link>
            <Link path="/coffeescript">CoffeeScript</Link>
            <hr />
            <Route path="/javascript" component={JavaScript} />
            <Route path="/haskell" component={Haskell} />
            <Route path="/coffeescript" component={CoffeeScript} />
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
