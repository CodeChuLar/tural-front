import React, { useState,useContext } from 'react'
import Inputfluid from './input-fluid'
import { IoIosSend } from "react-icons/io";
import axios from 'axios';
import { create } from './agencyContextApi';
export default function OfferForm() {
    var x = useContext(create);
    console.log("request id:", x.requestId)
    console.log("agent id:", x.agentId);
    const [price, setPrice] = useState("");
    const [dateRange, setDateRange] = useState("");
    const [additionalInfo, setAdditionalInfo] = useState("");
    const [error, setError] = useState(true);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:8081/api/v1/offers?requestId=${x.requestId}&agentId=${x.agentId}`, {
                price: price,
                dateRange: dateRange,
                additionalInfo: additionalInfo
            });
            setPrice("");
            setDateRange("");
            setAdditionalInfo("");
        } catch (error) {
            console.error('Error:', error);
            setError("Invalid Offer Sended.")
        }
    };
    


  return (
        <>
             <div className='offerForm'>
                <form>
                        <Inputfluid for="price" content="Price" type="text" inputId="price" inputName="price" Value={price} setValue={setPrice} />
                        <Inputfluid for="dateRange" content="Date Range" type="text" inputId="dateRange" inputName="dateRange" Value={dateRange} setValue={setDateRange}/>
                        <Inputfluid for="additionalInfo" content="Additional Information" type="additionalInfo" inputId="additionalInfo" inputName="additionalInfo" Value={additionalInfo} setValue={setAdditionalInfo}/>
                        <div className='offerSend'>
                            <button  onClick={handleSubmit}>
                                <IoIosSend />
                                <span>Send Offer</span>
                            </button>
                        </div>
                </form>
            </div>
        </>
  )
}
