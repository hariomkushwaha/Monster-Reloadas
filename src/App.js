import React, { Component } from 'react';

import { Cardlist } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component'
import './App.css';

class App extends Component{
  constructor() {
    super();
     
    this.state ={
      monsters:[],
      serchField: ''
    };
  }


  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(users => this.setState({monsters:users}));
  }


  render () {
    const { monsters,serchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(serchField.toLowerCase()))
    return (
      <div className="App">
      <h1>Monster SameAs</h1>
        <SearchBox
          placeholder= 'search monsters'
          handleChange ={s=> this.setState({serchField: s.target.value})}
        />
       <Cardlist monsters={filteredMonsters}/>
     </div>
    );
  }
}

export default App;
