import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

// class MyComponent extends React.Component{
    
   
//         render(){
//         return (
          

//         );
//     }
// }

const MycComponent = (props) => {
    const [listUser , setListUser] = useState(
        [
                   {id : 1 , name : "Thanh Pham" , age:"30" },
                    {id : 2 , name : "Thanhemon" , age:"20" },
                    {id : 3 , name : "Thanhasked" , age:"10" },
                 ]
    )
    
    const handleAddNewUser = (usrObj) =>{
        setListUser([usrObj,...listUser])
    }
    const handleDelUser = (userId) => {
        let listUserClone = listUser;
        listUserClone = listUserClone.filter(item => item.id !== userId);
        setListUser(listUserClone);
    }
    return(
        
        <>
        <AddUserInfor
        handleAddNewUser={handleAddNewUser}/>
        <DisplayInfor 
            listUser={listUser}
            handleDelUser={handleDelUser}
            
        />        
    </>
    )
} 

export default MycComponent;