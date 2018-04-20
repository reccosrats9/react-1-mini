import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      friends: [],
      picture: '',
      name: ''
    }
  }

  updatePicture(value){
    this.setState({picture: value})
  }

  updateName(value){
    this.setState({name: value})
  }

  addFriend(){
    let newFriends= this.state.friends.slice()
    let obj ={
      picture: this.state.picture,
      name: this.state.name
    }
    newFriends.push(obj)
    this.setState({
      friends: newFriends,
      picture: '',
      name:''
    })
  }


  render() {
    const friendsToDisplay = this.state.friends.map((e,i)=> {
      return(
        <div key={e.name+1}>
          <img src={e.picture} width='400px' />
          <span>{e.name}</span>
        </div>
      )
    } )

    return (
      <div className="App">
        <h1>Picture: </h1>
        <input type='text'
        onChange= {(e)=>this.updatePicture(e.target.value) } 
        value = {this.state.picture}/>

        <h1> Name: </h1>
        <input type='text'
        onChange= {(e)=>this.updateName(e.target.value)}
        value = {this.state.name}
        />

        <button onClick ={()=> this.addFriend() }>Add Friend!</button>

        {friendsToDisplay}
      </div>
    );
  }
}

export default App;
