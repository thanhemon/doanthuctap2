import React, { useEffect, useState } from "react";
import './DisplayInfor.scss'
import logo from './../logo.svg'

// class DisplayInfor extends React.Component{
    

//     render(){
//         const { listUser } =this.props; 
//         console.log(listUser)
//         return (
//         <div className="display-infor-container">
           
//             {true &&
//             <div>
//                 { listUser.map((user) => {
//                 return(
//                     <div key={user.id} className={+user.age > 18 ? "green" : "red"}> 
//                        <div> My name's {user.name}</div>
//                        <div> My age's {user.age}</div>
//                        <button onClick={() => this.props.handleDelUser(user.id)}>Delete</button>
//                        <hr/>
//                     </div>
//                 )
//             })}
//             </div>
//             }
//         </div>
//         )
    
//     }
// }

const DisplayInfor = (props) =>{
    const { listUser } =props; 
   
    const [isShowHideListUser, setShowHideListUser] = useState(true);
    
    const handleShowHideListUser = () =>
        {
            setShowHideListUser(!isShowHideListUser);
        }
        useEffect(() =>{
            
        })
    
                return (
                <div className="display-infor-container">
                   <div>
                    <span onClick={()=> handleShowHideListUser()}>
                    {isShowHideListUser ===true ? "hide" : "Show" }</span>
                   </div>
                    {isShowHideListUser &&
                    <div>
                        { listUser.map((user) => {
                        return(
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"}> 
                               <div> My name's {user.name}</div>
                               <div> My age's {user.age}</div>
                               <button onClick={() => props.handleDelUser(user.id)}>Delete</button>
                               <hr/>
                            </div>
                        )
                    })}
                    </div>
                    }
                </div>
                )
            
            }


export default DisplayInfor;