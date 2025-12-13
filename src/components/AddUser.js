import { fireEvent } from "@testing-library/dom";
import React from "react";
import { PiDropSimple } from "react-icons/pi";

class AddUser extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            firstname: "",
            surname: "",
            bio: "",
            age: 1,
            isHappy: false
        }
    }
    render(){
        return(
            <form>
                <input placeholder="name" onChange={(e) => this.setState({firstname: e.target.value})} />
                <input placeholder="surname" onChange={(e) => this.setState({username: e.target.value})}/>
                <textarea placeholder="bio" onChange={(e) => this.setState({bio: e.target.value})}></textarea>
                <input placeholder="age" onChange={(e) => this.setState({age: e.target.value})}/>
                <label htmlFor="isHappy"> happy?</label>
                <input type="checkbox" id="isHappy" onChange={(e) => this.setState({isHappy: e.target.value})}/>
                <button type="button" onClick={() => this.props.onAdd({
                    firstname: this.state.firstname,
                    surname: this.state.surname,
                    age: this.state.age,
                    bio: this.state.bio,
                    isHappy: this.state.isHappy,
                })}>Add</button>
            </form>
        )
    }
}

export default AddUser