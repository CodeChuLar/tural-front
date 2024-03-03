import React, { createContext, useState } from "react";

export const create = createContext();

export default function AgencyContextApi(props) {
    const [agentId, setAgentId] = useState(null);
    const [requestId, setRequestId] = useState(null);
    const [archiveList, setArchiveList] = useState([]);
    const createAgentId = (newAgentId) => {
        setAgentId(newAgentId);
    };

    const createRequestId = (newRequestId) => {
        setRequestId(newRequestId);
    };

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