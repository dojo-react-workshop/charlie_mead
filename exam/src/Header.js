import React from 'react';
import { Route, Link } from 'react-router-dom';

const Header = () => (
    <header className="row card">
        <div className="columns medium-8 small-12">
            <h1>Github viewer</h1>
        </div>
        <div className="columns medium-4 small-12">
            <Route path="/repos/:id" render={() => (
                <Link to="/"><button>Home</button></Link>
            )} />
        </div>
    </header>
);

export default Header;

