import FaqItem from '../FaqItem'

import './index.css'

/*
    const required = modified.filter(each => {
      if (each.id === id) {
        return {...each, isAnswerVisible: true}
      }
      return each
    })
    return required

    getOriginalList = () => {
    const {faqsList} = this.props
    const modified = faqsList.map(each => ({...each, isAnswerVisible: false}))
    return modified

    const initialListValue = this.getOriginalList()
  }
  getAnswer = id => {
    this.setState(prevState => ({
      initialLists: prevState.initialLists.map(each => {
        if (each.id === id) {
          return {...each, isAnswerVisible: !each.isAnswerVisible}
        }
        return each
      }),
    }))
    */

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="app-container">
      <div className="faq-container">
        <h1 className="head">FAQs</h1>
        <ul className="faqs-list">
          {faqsList.map(each => (
            <FaqItem key={each.id} faqsDetails={each} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
