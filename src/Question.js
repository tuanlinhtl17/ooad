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

  // checkBoxClick = (e) => {
  //   if (e.target.checked) {
  //     this.setState({
  //       selected: [...this.state.selected, e.target.value]
  //     })
  //   } else {
  //     let newSelected = this.state.selected.splice(this.state.selected.indexOf(e.target.value), 1)
  //     this.setState({
  //       selected: newSelected
  //     })
  //   }
  //   console.log(this.state.selected);
  // }

  displayCorrects(corrects, checked) {
    if (checked) {
      let correct_answers = corrects.map(correct => Alphabet[correct]);
      let c_as = correct_answers.join(' ');
      return <p>Correct answers: <strong>{c_as}</strong></p>;
    }
  }

  render() {
    const { question, index, checked } = this.props;
    return (
      <div className="question" key={index}>
        <p className="content"><strong>{index + 1}. {question.cont}</strong></p>
        <Form>
          {
            question.answers.map((answer, a_index) => {
              return (
                <div key={a_index}>
                  <input type="checkbox" value={a_index} />
                  <label><strong>{Alphabet[a_index]}.</strong> {answer}</label>
                </div>
              )
            })
          }
        </Form>
        {this.displayCorrects(question.corrects, checked)}
        <br />
      </div>

    )
  }
}

export default Question;
