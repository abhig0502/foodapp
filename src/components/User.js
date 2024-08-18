import { useState } from "react";

const User = (props) =>{
    const {name,Location}=props;
    const [count,setcount]=useState(0);
    const [count2,setcount2] =useState(1);
    return (
        <div className="user-card">
        <h1>Count: {count}</h1>
        <button onClick={()=>{
            setcount(count+1);
        }}>count increase for count</button>
        <h1>Count: {count2}</h1>
        <button onClick={()=>{
            setcount2(count2+1);
        }}>count increase for count2</button>
        
            <h1>Name:{name}</h1>
            <h3>Location: {Location}</h3>
            <h4>Contact: @akshaymarch7</h4>
        </div>
    );
}

export default User;