import React from 'react'

const ShowAddress = ({account}) => {
  return (
    <div id='showAddress'>
        {account?account:"Metamask is not installed"}
    </div>
  )
}

export default ShowAddress