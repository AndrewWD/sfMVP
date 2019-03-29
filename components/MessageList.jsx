import React from 'react'
import Message from './Message'

const MessageList = ({ messages, isTrashedView, onStarredorTrashed }) => (
  messages.map(message => (
    <Message 
      message={message} key={message.id} 
      showTrashBtn={!isTrashedView}
      onClickStarOrTrashBtn={(id, starOrTrash) => onStarredorTrashed(id, starOrTrash)}
    />
  ))
)

export default MessageList