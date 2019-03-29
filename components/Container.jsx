import React, { Component } from 'react'
import MessageList from './MessageList' 
import SearchInput from './SearchInput'
import { messages } from '../data/messages.json'
import styles from '../assets/styles/Container.module.css'

class Container extends Component {
  state = {
    messages: [],
    showTrashedMsg: false,
  }

  componentDidMount() {
    this.setState({
      messages,
    })
  }

  handleStarredOrTrashed = (id, starOrTrash) => {
    const { messages } = this.state
    const newMessages = messages.map(message => (
      message.id === id ? 
        {
          ...message, 
          meta: {
            ...message.meta, 
            [starOrTrash]: !message.meta[starOrTrash],
          }
        } : message
    ))
    this.setState({
      messages: newMessages
    })
  }

  handleToggleClick = () => {
    this.setState({
      showTrashedMsg: !this.state.showTrashedMsg,
    })
  }

  handleSearchKeyword = keyword => {
    const { messages } = this.state
    this.clearSearchResult(messages)
    // Won't trigger search if the input is empty or just spaces
    if (keyword.trim().length === 0) {
      this.setState({
        messages,
      })
      return
    }
    const keywordRegex = new RegExp(`${keyword}`, 'gi') 
    const searchedMsgs = messages.map(message => {
      message.content = message.content.replace(keywordRegex, match => `<span class="highlight">${match}</span>`)
      return message
    })
    this.setState({
      messages: searchedMsgs,
    })
  } 

  clearSearchResult = messages => {
    const hlRegex = new RegExp('<span class="highlight">(.*?)</span>', 'g')
    // Get rid of all span tag in contents
    messages.forEach(message => {
      message.content = message.content.replace(hlRegex, (match, keyword) => keyword)
    })
  }

  handleCancelSearch = () => {
    const { messages } = this.state
    this.clearSearchResult(messages)
    this.setState({
      messages: [...messages],
    })
  }

  render() {
    const { messages, showTrashedMsg } = this.state
    let starCount = 0;
    const filteredMsgs = messages.filter(message => {
      const { isStarred, isTrashed } = message.meta
      const showCondition = showTrashedMsg && isTrashed || 
      !showTrashedMsg && !isTrashed
      if (showCondition) {
        starCount += (+isStarred)
      }
      return showCondition
    })
    return (
      <section className={styles.container}>
        <h2>Starred: {starCount}</h2>
        <button 
          className={styles.toggleButton}
          onClick={this.handleToggleClick}
        >
          {showTrashedMsg ? 'Show Untrashed Messages' : 'Show Trashed Messages'}
        </button>
        <SearchInput 
          className={styles.searchInput}
          onSearchKeyword={this.handleSearchKeyword} 
          onClickCancelBtn={this.handleCancelSearch}
        />
        <MessageList 
          messages={filteredMsgs} 
          isTrashedView={showTrashedMsg}
          onStarredorTrashed={this.handleStarredOrTrashed} 
        />
      </section>
    )
  }
}

export default Container