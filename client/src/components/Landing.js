import React, {Component} from 'react';
import brocoli from '../images/brocoli.jpg';

class Landing extends Component {
    render() {
        return (
            <div className="App">
                <h1>Dashboard</h1>
                <h3>MicroFarm Web Application</h3>
                <p>Broco1i is MicroFarm's web application that provides monitoring feature for the Micro or Macro systems.</p>
                <img src={brocoli}></img>
            </div>
        )
    }
}

export default Landing;