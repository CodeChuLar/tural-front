import React, { useContext, useEffect, useState } from 'react'
import TableRow from './table-row'
import axios from 'axios';
import { create } from './agencyContextApi';

export default function RequestTable() {
    const x = useContext(create);
    const [requestsList, setRequestsList] = useState([]);

    function getRequests() {
        axios.get(`http://localhost:8081/api/v1/requests`).then((res) => {
            // Map through each request and fetch status from another endpoint
            const promises = res.data.map(request => {
                // Fetch status for each requestId
                return axios.get(`http://localhost:8081/api/v1/agent-requests/${request.id}`)
                    .then(response => {
                        // Combine the request data with the fetched status
                        return {
                            ...request,
                            status: response.data.status
                        };
                    })
                    .catch(error => {
                        console.error("Error fetching status:", error);
                        // If there's an error fetching status, return the request data without status
                        return request;
                    });
            });

            // Wait for all promises to resolve
            Promise.all(promises).then(updatedRequests => {
                // Set the updated requests list with status included
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
                                status={data.status} // Using the fetched status
                                onOfferClick={() => handleOfferClick(data.id)} />
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}
