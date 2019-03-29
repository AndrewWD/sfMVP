import React, { Component } from 'react'
import styles from '../assets/styles/SearchInput.module.css'

class SearchInput extends Component {
  state = {
    keyword: '',
  }

  handleInputChange = e => {
    this.setState({
      keyword: e.target.value,
    })
  }

  handleSearch = e => {
    const { keyword } = this.state
    // Search keyword is the submit button is clicked or press the enter
    if (e.type === 'click' 
      || e.type === 'keypress' && e.key === 'Enter') {
      this.props.onSearchKeyword(keyword)
    }   
  } 

  handleCancelSearchBtn = () => {
    this.setState({
      keyword: '',
    })
    this.props.onClickCancelBtn()
  }

  render() {
    return (
      <div className={this.props.className}>
        <input 
          className={styles.inputBox}
          value={this.state.keyword}
          onChange={this.handleInputChange}
          onKeyPress={this.handleSearch}
        />
        <button
          onClick={this.handleSearch}
        >
          Submit
        </button>
        <button 
          onClick={this.handleCancelSearchBtn}
        >
          Cancel
        </button>
      </div>
      
    )
  }
}

export default SearchInput