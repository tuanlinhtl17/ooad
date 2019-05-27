import React, {
  Component
} from 'react';

import { Form } from 'react-bootstrap';

const Alphabet = ["A", "B", "C", "D", "E"]

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_correct: false,
      selected: []
    }
  }

  render() {
    const { questions } = this.props

    return (
      <div className="questions">
        {
          questions.map((question, index) => {
            return (
              <div className="question" key={index}>
                <p className="content"><strong>{index + 1}. {question.cont}</strong></p>
                <Form>
                  {
                    question.answers.map((answer, index) => {
                      return (
                        <div key={index}>
                          <input type="checkbox" value={index} />
                          <label><strong>{Alphabet[index]}.</strong> {answer}</label>
                        </div>
                      )
                    })
                  }
                </Form>
                <br />
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Question;