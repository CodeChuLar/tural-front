import React, { useContext, useEffect, useState } from 'react'
import TableRow from './table-row'
import axios from 'axios';
import { create } from './agencyContextApi';

export default function RequestTable() {
    const x = useContext(create);
    const [requestsList, setRequestsList] = useState([]);

    function getRequests() {
        axios.get(`http://localhost:8081/api/v1/requests`).then((res) => {
            const promises = res.data.map(request => {
                return axios.get(`http://localhost:8081/api/v1/agent-requests/${request.id}`)
                    .then(response => {
                        return {
                            ...request,
                            status: response.data.status
                        };
                    })
                    .catch(error => {
                        console.error("Error fetching status:", error);
                        return request;
                    });
            });

            Promise.all(promises).then(updatedRequests => {
                setRequestsList(updatedRequests);
            });
        }).catch(error => {
            console.error("Error fetching requests:", error);
        });
    }

    function handleOfferClick(id) {
        x.createRequestId(id);
    }

    useEffect(() => {
        getRequests();
    }, [])

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
                        requestsList.map((data, index) => (
                            <TableRow
                                key={data.id}
                                name={data.fullName}
                                phone={data.phoneNumber}
                                status={data.status} 
                                onOfferClick={() => handleOfferClick(data.id)} />
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}
