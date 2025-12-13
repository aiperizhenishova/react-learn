import React from "react";
import Header from "./components/Header";
import Users from "./components/Users";
import AddUser from "./components/AddUser";


// компонент
class App extends React.Component {
  // состояние
  constructor(props){
    super(props)
    this.state = {
        users: [
            {
                id: 1,
                firstname: 'Aiperi',
                surname: 'Zhenishova',
                age: 22,
                bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                isHappy: true
            },
            {
                id: 2,
                firstname: 'Jennie',
                surname: 'Kim',
                age: 29,
                bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                isHappy: true
            }
        ]
    }
    this.addUser = this.addUser.bind(this)
}

  render(){
    return(<div>
       <Header title="users list" />
       <main>
          <Users users={this.state.users}/>   {/* при вызове компонента users мы передаем список пользоватлей */}
       </main>
       <aside>
          <AddUser onAdd={this.addUser}/>
       </aside>
     </div>) 
  }


  addUser(user){
    const id = this.state.users.length + 1
    this.setState({users: [...this.state.users, {id, ...user}]})
  }

}
  
export default App  // экспортирует