import React from 'react'
import { GrStatusGood } from "react-icons/gr";
export default function RegisteredOk() {
  return (
        <>
            <div className='success-container'>
                <div className='success'>
                    <div className='success-icon'>
                            <GrStatusGood />
                    </div>
                    <div className='success-message'>
                        <p>
                            Registrasiya uğurla başa çattı! <br/>
                            Mailinizdən konfiqurasiya əməlliyatını başa çattırın!
                        </p>
                    </div>
                </div>
            </div>
        </>
  )
}
