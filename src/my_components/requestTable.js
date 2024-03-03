import React, { useContext, useEffect, useState } from 'react'
import TableRow from './table-row'
import axios from 'axios';
import { create } from './agencyContextApi';
export default function RequestTable() {
    const {createRequestId } = useContext(AgencyContext);
    const [requestsList,setRequestsList] = useState([]);
    function getRequests(){
        axios.get(`http://localhost:8081/api/v1/requests`).then((res)=>{
            setRequestsList(res.data);
        })
    }
    function handleOfferClick(id) {
        createRequestId(id);
    }
    useEffect(()=>{
        getRequests();
    },[])
   
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
                            {
                                requestsList.map((data)=>(
                                    <TableRow 
                                         name={data.fullName} 
                                         phone={data.phoneNumber} 
                                         status={data.active ? "pending" : "assigned"}
                                         onOfferClick={() => handleOfferClick(data.id)}/>
                                 ))
                            }
                        </tbody>
                    </table>
                </div>
         </>
  )
}
