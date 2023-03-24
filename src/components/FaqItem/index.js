import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isActive: false}

  onToggleIsActive = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  renderAnswer = () => {
    const {faqsDetails} = this.props
    const {answerText} = faqsDetails
    const {isActive} = this.state
    if (isActive) {
      return (
        <div>
          <hr className="horizontal-line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {faqsDetails} = this.props
    const {questionText} = faqsDetails
    const {isActive} = this.state
    const imgUrl = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altText = isActive ? 'minus' : 'plus'

    return (
      <li className="list-item">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          <button
            type="button"
            className="button"
            onClick={this.onToggleIsActive}
          >
            <img src={imgUrl} alt={altText} className="img" />
          </button>
        </div>

        {this.renderAnswer()}
      </li>
    )
  }
}
export default FaqItem
