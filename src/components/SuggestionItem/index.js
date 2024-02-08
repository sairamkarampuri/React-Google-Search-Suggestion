// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestions, fillTheSearchIndput} = props
  const {id, suggestion} = suggestions
  const selectOptioin = () => {
    fillTheSearchIndput(id)
  }

  return (
    <li className="list-item">
      <p className="suggestion-msg">{suggestion}</p>
      <img
        className="arrow-img"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        onClick={selectOptioin}
      />
    </li>
  )
}

export default SuggestionItem
