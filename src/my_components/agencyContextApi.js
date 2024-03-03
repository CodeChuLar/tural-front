import React, {createContext, useState, useEffect} from "react";

export const create = createContext();

export default function AgencyContextApi(props) {
    const [agentId, setAgentId] = useState(() => {
        // Retrieve agentId from localStorage if exists
        return localStorage.getItem('agentId') || null;
    });
    const [requestId, setRequestId] = useState(null);
    const [archiveList, setArchiveList] = useState([]);
    const createAgentId = (newAgentId) => {
        setAgentId(newAgentId);
    };

    const createRequestId = (newRequestId) => {
        setRequestId(newRequestId);
    };

    useEffect(() => {
        localStorage.setItem('agentId', agentId);
    }, [agentId]);

    return (
        <create.Provider value={{
            agentId,
            requestId,
            archiveList,
            createAgentId,
            createRequestId,
            setArchiveList
        }}>
            {props.children}
        </create.Provider>
    );
}
