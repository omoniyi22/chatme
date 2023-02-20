import React from 'react'
import PropTypes from 'prop-types'
import Message from "./Message";

const MessagesListComponent = ({ messages }) => (
  <section id="message-list">
    <div style={{ display: "flex", flexDirection: "column", minWidth: "100%" }}>
      {messages.map(message => (
        <Message
          Key={message.id}
          {...message} />
      ))}
    </div>
  </section>
)

// MessagesListComponent.PropTypes={
//     messages: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             author: PropTypes.string.isRequired,
//             messages: PropTypes.string.isRequired,
//         }).isRequired
//     ).isRequired
// }
export default MessagesListComponent