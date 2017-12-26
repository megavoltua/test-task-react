import React, { Component } from 'react';

import './style.css';
import InfoBlock from "../InfoBlock";

class App extends Component {
    render() {
        return (
            <InfoBlock address="Wohnung..." price="29800000" title="EUM - Tolle Asdjfhskdjfsdf Nahe Westbahnhof!" pricePerMeter="346512" priceSquare="304" rooms="6" discount="75"/>
        );
    }
}

export default App;