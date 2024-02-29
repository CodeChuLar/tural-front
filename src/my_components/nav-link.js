import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function NavLink(props) {
  return (
        <>
            <li>
                <Link to={props.path}>
                        <span>{props.text}</span>
                </Link>
            </li>
        </>
  )
}
