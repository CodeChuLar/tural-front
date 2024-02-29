import React from 'react'
import NavLink from './nav-link'

export default function Header() {
  return (
    <>
        <header>
            <nav>
                <ul>
                    <NavLink path="/requests" text="Requests"/>
                    <NavLink path="/archives" text="Archives"/>
                </ul>
            </nav>
        </header>
    </>
  )
}
