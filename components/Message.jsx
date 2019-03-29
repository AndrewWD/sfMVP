import React, { Component } from 'react'
import timeFormat from '../utils/timeFormat'
import styles from '../assets/styles/Message.module.css'

const createMarkup = content => ({
  __html: content,
})

const Message = ({ message, showTrashBtn, onClickStarOrTrashBtn }) => {
  const { 
    id, 
    avatar, 
    handle, 
    source, 
    timestamp,
    content,
    meta
  } = message
  let starButtonClassName, starButtonText
  if (meta.isStarred) {
    starButtonClassName = styles.isStarred
    starButtonText = 'Starred!'
  } else {
    starButtonText = 'Star Message!'
  }
  return (
    <div className={styles.messageContainer}>
      <div className={styles.userInfo}>
        <div className={styles.imgContainer}>
          <img src={avatar} alt="avatar"/>
        </div>
        <p>{handle}</p>
      </div>
      <div className={styles.contentContainer}>
        <span>{source}</span>
        <span>{timeFormat(timestamp)}</span>
        <div 
          className={styles.content} 
          dangerouslySetInnerHTML={createMarkup(content)}
        />
      </div>
      <div className={styles.buttonGroup}>
        <button 
          className={starButtonClassName}
          onClick={() => onClickStarOrTrashBtn(id, 'isStarred')}
        >
          {starButtonText}
        </button>
        <button
          className={styles.trashButton}
          onClick={() => onClickStarOrTrashBtn(id, 'isTrashed')}
        >
          {showTrashBtn ? <span className="fas fa-trash-alt" /> : <span className="fas fa-trash-restore-alt" />}
        </button>
      </div>
    </div>
  )
}

export default Message