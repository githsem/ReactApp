import React, { Component } from 'react'
import AddUser from './components/AddUser'
import Users from './components/Users'

class App extends Component {
  constructor(props){
    super(props)
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
  render() {
    return (
      <div className="container">
        <h4>User App</h4>
        <hr />
        <AddUser/>
        <hr />
        <Users users= {this.state.users}/>
      </div>
    )
  }
}
export default App;