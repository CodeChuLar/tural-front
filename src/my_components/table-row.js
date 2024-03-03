import React from 'react'
import { MdLocalOffer } from "react-icons/md";
import { Link } from 'react-router-dom';
import { PiArchiveBoxDuotone } from "react-icons/pi";
export default function TableRow(props) {
  return (
        <tr>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            <td>{props.status}</td>
            <td>
                <Link to="/offerSend">
                  <button className='offer' onClick={props.onOfferClick}>
                    <MdLocalOffer />
                    <span>Offer</span>
                    </button>
                </Link>
                <button className='archive'>
                    <PiArchiveBoxDuotone />
                    <span>Archive</span>
                </button>
            </td>
        </tr>
  )
}
