import React, { Component } from 'react'
import AddUser from './components/AddUser'
import Users from './components/Users'

class App extends Component {
  
  constructor(props){
    super(props)
    this.deleteUser = this.deleteUser.bind(this);
    this.addUser = this.addUser.bind(this);
    this.state = {
      users:[
        {
          id:1,
          name: "Hasan",
          email: "hasan@gmail.com"
        },
        {
          id:2,
          name: "Hakan",
          email: "hakan@gmail.com"
        },
        {
          id:3,
          name: "Fahri",
          email: "fahri@gmail.com"
        },
        {
          id:4,
          name: "Bünyamin",
          email: "bünyamin@gmail.com"
        },
        {
          id:5,
          name: "Ibrahim",
          email: "ibrahim@gmail.com"
        }
      ]
    }
  }
  addUser(newUser){
    let updatedUsers = this.state.users;

    updatedUsers.push(newUser)
    this.setState({
      users : updatedUsers
    })
  }
  deleteUser(id){
    let updatedUsers = this.state.users;

    updatedUsers = updatedUsers.filter(user =>user.id !== id);
    this.setState({
      users : updatedUsers
    })
  }
  render() {
    return (
      <div className="container">
        <h4 class="nav justify-content-center">User App</h4>
        <hr />
        <AddUser addUser={this.addUser}/>
        <hr />
        <Users deleteUser={this.deleteUser} users= {this.state.users}/>
      </div>
    )
  }
}
export default App;