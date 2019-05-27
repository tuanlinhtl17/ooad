import React, {Component} from 'react';

import { Button } from 'react-bootstrap';

import Question from './Question';

class QuestionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    }
  }

  checkAnswer = () => {
    this.setState({checked: true})
  }

  render() {
    const { questions } = this.props
    return (
      <div className="questions">
        {
          questions.map((question, index) => {
            return (
              <Question 
                key={index}
                question={question}
                index={index}
                checked={this.state.checked} 
              />
            )
          })
        }
  
        <Button variant="primary" onClick={this.checkAnswer}>Check</Button>
        <hr />
      </div>
    )
  }
}

export default QuestionList;
