import React from 'react'

export default function Inputfluid(props) {
  return (
    <>
            <div className='input-fluid'>
                        <label htmlFor={props.for}>{props.content}</label>
                        <input 
                            type={props.inputType} 
                            id={props.inputId} 
                            name={props.inputName}
                            value={props.Value}
                            onChange={(e) => props.setValue(e.target.value)}/>
            </div>
    </>
  )
}
