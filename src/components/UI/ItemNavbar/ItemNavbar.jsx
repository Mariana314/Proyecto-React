import React from 'react'
import { NavLink } from 'react-router-dom'

export const ItemNavbar = ({contentItem, myStyles, route}) => {
  return (
    <li>
        <NavLink className={myStyles} to={route}>{contentItem}</NavLink >
    </li>
  )
}
