import React, { Component } from 'react';
import photo from './jag.jpg';
import './App.css';
import About from './About';
import Projects from './Projects';
import Contacts from './Contacts';


class App extends Component {

  state ={
    view: 0,
  }

  onClick = (view) => {
    this.setState({ view })
  }

  getView() {
    const { view } = this.state;
    if(view === 1){ return <About />}
    if(view === 2){ return <Projects />}
    if(view === 3){ return <Contacts />}
    return <div>Frontend developer</div>;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Mikael Modig
          </h1>
          <img src={photo} className="App-photo" alt="Me"></img>
        </header>
        <nav className="App-nav">
          <ul>
            <li>
                <button onClick={()=>this.onClick(1)}>About</button>
              </li>
            <li>
                <button onClick={()=>this.onClick(2)}>Projects</button>
              </li>
            <li>
                <button onClick={()=>this.onClick(3)}>Contact</button>
              </li>
          </ul>
        </nav>
        <main>
          {this.getView()}
        </main>
      </div>
    );
  }
}

export default App;
