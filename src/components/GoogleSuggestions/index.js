// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  constructor(props) {
    super(props)

    this.state = {searchInput: ''}
  }

  changeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  fillTheSearchIndput = suggetionId => {
    const {suggestionsList} = this.props
    const selectedSuggestion = suggestionsList.filter(
      eachSuggestion => eachSuggestion.id === suggetionId,
    )

    this.setState({searchInput: selectedSuggestion[0].suggestion})
    console.log(selectedSuggestion[0].suggestion)
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const filteredSuggestions = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="main-container">
          <img
            className="google-logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
          <div className="search-suggest-container">
            <div className="search-box-img-container">
              <img
                className="search-img"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
              />
              <input
                className="input-search-box"
                type="search"
                placeholder="Search Google"
                value={searchInput}
                onChange={this.changeSearchInput}
              />
            </div>
            <ul className="suggestions-list-container">
              {filteredSuggestions.map(eachSuggestion => (
                <SuggestionItem
                  suggestions={eachSuggestion}
                  key={eachSuggestion.id}
                  fillTheSearchIndput={this.fillTheSearchIndput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
