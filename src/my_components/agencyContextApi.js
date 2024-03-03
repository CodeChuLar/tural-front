import React,{createContext,useState} from "react";
export var create = createContext();
export default function AgencyContextApi(props) {
     const [agentId,setAgentId] = useState(null);
     const [requestId,setRequestId] = useState(null);
     const createAgentId = (newAgentId) => {
        setAgentId(newAgentId);
    };
    const createRequestId = (newRequestId) => {
        setRequestId(newRequestId);
    };
  return (
        <>
            <create.Provider  value={{
                    agentId,
                    requestId,
                    createAgentId,
                    createRequestId
            }}/>
                {props.children}
            <create.Provider/>
        </>
  )
}
