import React, { useState } from "react";

// class AddUserInfor extends React.Component{

//     render(){
//         return(

//         )
//     }
// }

const AddUserInfor = (props) =>
{
    const [name , setName] = useState('');
    const [address , setAddress] = useState('NinhBinh');
    const [age , setAge] = useState('');

       const  handleClick=(event) => {
            console.log("My name is", this.state.name)
            console.log()
            this.setState({
                name:'thanhemon',
                age : Math.floor((Math.random()*100)+1)
            })
        }
        const handleOnChangeInput = (event) =>{
            
                setName( event.target.value)
        
            
        }
        const handleOnChangeAge = (event) =>{
            setAge(event.target.value)
            
        }
        const handleOnSubmit =  (event) => {
            event.preventDefault();
            props.handleAddNewUser({
                id : Math.floor((Math.random()*100+1)) + '-random',
                name : name,
                age : age,
        });
         }
    return(
        <>
        my first Component
        {Math.random()}
        my name is {name}  and i am {age}
        <button onClick={(event)=>{this.handleClick(event)}}>click me</button>

        <form onSubmit={(event)=>this.handleOnSubmit(event)}>
            <input value={name} type="text" onChange={(event)=> handleOnChangeInput(event)}>
            </input>
           
        </form>
        <form onSubmit={(event)=>this.handleOnSubmit(event)}>
            <input value={age} type="text" onChange={(event)=> handleOnChangeAge(event)}>
            </input>
            <button>submit</button>
        </form>
    </>
    )
}
export default AddUserInfor;