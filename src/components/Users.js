import React from "react"
import User from "./User"

class Users extends React.Component{
    // состояние
    constructor(props){
        super(props)
        this.state = {
            users: [
                {
                    id: 1,
                    firstname: 'Aiperi',
                    age: 22,
                    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    isHappy: true
                },
                {
                    id: 2,
                    firstname: 'Jennie',
                    age: 29,
                    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    isHappy: true
                }
            ]
        }
    }
    render(){
        if(this.state.users.length > 0)
            return(<div>
                {this.state.users.map((element) => (
                    <User key={element.id} user = {element}/>
                ))}
            </div>)
        else
            return(<div className="user">
                <h3>no user</h3>
            </div>)
    }
}

export default Users