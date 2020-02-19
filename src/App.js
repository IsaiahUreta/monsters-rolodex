import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import {SearchBox } from './components/search-box/search-box.component';

import './App.css';




class App extends Component{
  constructor(){
    super(); //
    this.state = {
      monsters :  [],
      searchfield: ''
    };
  }

  componentDidMount(){ // load when the app component get called
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json()) //take response from url and convert to json file
    .then(users => this.setState({monsters: users }))  // take the users that we got at it and put users array
    .catch(error => console.log('FAILED'))
  }

  handleChange = e =>{
    this.setState({searchfield: e.target.value})

  }

    

  render(){
    const {monsters, searchfield} =  this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchfield.toLowerCase())
      );

    return (
      <div className="App">

        <h1> Monster Rolodex</h1>
       
       <SearchBox 
       placeholder='Search Monsters'
       handleChange = {this.handleChange}
       />
        <CardList monsters={filteredMonsters}/>
      </div>
    ); 
  } 
} 

export default App;
