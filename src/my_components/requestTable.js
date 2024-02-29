import React, { useEffect, useState } from 'react'
import TableRow from './table-row'
import axios from 'axios';

export default function RequestTable() {
    const [requestsList,setRequestsList] = useState([]);

    // function getRequests(){
    //     axios.get(`http://localhost:8081/api/v1/requests`).then((res)=>{
    //         setRequestsList(res.data);
    //         console.log(res.data)
    //     })
    // }
    //  useEffect(()=>{
    //          getRequests();
    //  },[])
  return (
         <>
                <div className='requestsTable'>
                    <table>
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Phone</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {
                                requestsList.map((data)=>(
                                    <TableRow name={data.fullName} phone={data.phoneNumber} status={data.active ? "pending" : "assigned"}/>
                                 ))
                            } */}
                            <TableRow name="Ulvi" phone="090909090909" status="pending"/>
                        </tbody>
                    </table>
                </div>
         </>
  )
}
