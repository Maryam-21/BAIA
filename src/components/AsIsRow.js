import React, { useState, useEffect } from 'react'

function AsIsRow({ title, details }) {
  const [fullDetails, setFullDetails] = useState("")
  useEffect(() => {
    let fd = ""
    details["$values"].map(function (detail) {
      fd = fd + detail + ". ";
    })
    setFullDetails(fd);
  }, []);
  return (
    <tr>
      <td style={{textTransform: "capitalize", width: "30%"}}>
        {title}
      </td>
      <td>
        {
          fullDetails
        }
      </td>
    </tr>
  )
}

export default AsIsRow