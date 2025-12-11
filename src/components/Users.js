import React from "react"

class Users extends React.Component{
    users =[
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
    render(){
        if(this.users.length > 0)
            return(<div>
                {this.users.map((element) => <div className="user" key={element.id}>
                    <h3>{element.firstname} {element.age}</h3>
                    <p>{element.bio}</p>
                    <b>{element.isHappy ? 'happy' : 'not happy'}</b>
                </div>)}
            </div>)
        else
            return(<div className="user">
                <h3>no user</h3>
            </div>)
    }
}

export default Users