import React, { Component } from 'react';
import classnames from 'classnames';

import logo from './logo.svg';
import './style.css';
import InfoBlock from "../InfoBlock";

class App extends Component {
    // static propTypes = {}
    // static defaultProps = {}
    // state = {}

    render() {
        const { className, ...props } = this.props;
        return (
            <InfoBlock address="Wohnung..." price="29800000" title="EUM - Tolle Asdjfhskdjfsdf Nahe Westbahnhof!" pricePerMeter="346512" priceSquare="304" rooms="6" discount="75"/>
/*
            <div className={classnames('App', className)} {...props}>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
           </div>
*/
        );
    }
}

export default App;