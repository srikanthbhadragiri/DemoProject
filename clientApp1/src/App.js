import React, { Component } from 'react';
import ShowUser from './Components/ShowUser';
import AddUser from './Components/AddUser';

class App extends Component {
  state = {
    users:[]
  };

  addNewUser = (newUser) => {
    let existingUsers = this.state.users;
    existingUsers.push(newUser);
    this.setState({
      users:existingUsers
    });
    console.log(this.state.users);
  };

  deleteUser = (index) => {
    console.log('value to be deleted ', index);
    let existingUsers = this.state.users;
    existingUsers.splice(index, 1);
    this.setState({
      users:existingUsers
    });
  }

  render() {
    return (
      <div className="App">
        <AddUser
          addNewUser={this.addNewUser}/>
        <ShowUser
          users={this.state.users}
          deleteUser={this.deleteUser}/>
      </div>
    );
  }
}

export default App;
