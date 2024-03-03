import React,{createContext,useState} from "react";
export var create = createContext();
export default function AgencyContextApi() {
     const [agentId,setAgentId] = useState();
     const [requestId,setRequestId] = useState();

  return (
        <>
            <create.Provider  value={{
                    agentId,
                    requestId,
                    setRequestId,
                    setAgentId
            }}/>
                {props.children}
            <create.Provider/>
        </>
  )
}
