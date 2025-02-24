import React from 'react'

export const ItemNavbar = ({contentItem ='Item', myStyles}) => {
  return (
    <li className={myStyles}>
        <a href="">{contentItem}</a>
    </li>
  )
}
