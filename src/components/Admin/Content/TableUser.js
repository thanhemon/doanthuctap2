import { useEffect, useState } from "react"
import { getAllUsers } from "../../../services/apiServices";

const TableUser= (props)=>{

    const [listUser , setListUsers] = useState([ ])

    useEffect(()=> {
        fetchListUsers();
    },[]);

    const fetchListUsers = async () => {
        let res = await getAllUsers();
        if(res.EC === 0 )
            {
                setListUsers(res.DT)
            }
    }
return (
    <>
    <table className="table table-hover table-bordered">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">User name</th>
      <th scope="col">Email</th>
      <th scope="col">Role</th>
    </tr>
  </thead>
  <tbody>
    {listUser && listUser.length > 0 && 
     listUser.map((item,index)=> {
        return (
            <tr key={`table-users- ${index}`}>
            <th scope="row">{index+1}</th>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td>{item.role}</td>
            </tr>
        )
     })}
    {listUser && listUser.length === 0 &&<tr><td colSpan={'4'}>Not Found data</td></tr>}
  </tbody>
</table>
    </>
)
}

export default TableUser