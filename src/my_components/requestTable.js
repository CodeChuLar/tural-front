import React, { useEffect, useState } from 'react'
import TableRow from './table-row'
import axios from 'axios';
import OfferForm from './offerForm';
export default function RequestTable() {
    const [selectedRequestId, setSelectedRequestId] = useState(null);
    const [requestsList,setRequestsList] = useState([]);

    function getRequests(){
        axios.get(`http://localhost:8081/api/v1/requests`).then((res)=>{
            setRequestsList(res.data);
            <OfferForm requestId={res.id}/>
            console.log(res.data)
        })
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
                                    <TableRow id={data.id} onOfferClick={handleOfferClick}  name={data.fullName} phone={data.phoneNumber} status={data.active ? "pending" : "assigned"}/>
                                 ))
                            }
                        </tbody>
                    </table>
                </div>
                {selectedRequestId && <OfferForm requestId={selectedRequestId} />}
         </>
  )
}
