import React, {createContext, useState, useEffect} from "react";

export const create = createContext();

export default function AgencyContextApi(props) {
    const [agentId, setAgentId] = useState(() => {
        // Retrieve agentId from localStorage if exists
        return localStorage.getItem('agentId') || null;
    });
    const [requestId, setRequestId] = useState(null);

    const createAgentId = (newAgentId) => {
        setAgentId(newAgentId);
    };

    const createRequestId = (newRequestId) => {
        setRequestId(newRequestId);
    };

    useEffect(() => {
        // Store agentId in localStorage whenever it changes
        localStorage.setItem('agentId', agentId);
    }, [agentId]);

    return (
        <create.Provider value={{
            agentId,
            requestId,
            createAgentId,
            createRequestId
        }}>
            {props.children}
        </create.Provider>
    );
}
