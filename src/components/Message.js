import React from 'react'
import PropTypes from 'prop-types'

const MessageComponent = ({ message, author }) => (
  <div style={{
    border: "solid grey 1.5px", margin: "4px", padding: "9px", borderRadius: "10px", maxWidth: "fit-content",
    marginLeft: author != 'Me' ? "0px" : "auto"
  }}>
    <div >
      <div style={{ display: "flex", flexDirection: "column" }}><small><b>{author}:</b></small><i> {message}</i></div>
    </div>
  </div>
)
// MessageComponent.PropTypes= {
//     message: PropTypes.string.isRequired,
//     author: PropTypes.string.isRequired
// }

export default MessageComponent