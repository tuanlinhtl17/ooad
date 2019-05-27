import React from 'react';
import './App.css';
import { HashRouter  as Router, Route, Link } from 'react-router-dom';

import { Container, Jumbotron, Pagination } from 'react-bootstrap';

import QuestionList from './QuestionList';

import { questions1 } from './databases/ooad/ooad1';
import { questions2 } from './databases/ooad/ooad2';
import { questions3 } from './databases/ooad/ooad3';

function App() {
  return (
    <Router>
      <Container>
        <Jumbotron>
          <Pagination>
            <Pagination.Item><Link to="/">1</Link></Pagination.Item>
            <Pagination.Item><Link to="/2">2</Link></Pagination.Item>
            <Pagination.Item><Link to="/3">3</Link></Pagination.Item>
          </Pagination>

          <Route path="/" exact component={() => <QuestionList questions={questions1} />} />
          <Route path="/2" component={() => <QuestionList questions={questions2} />} />
          <Route path="/3" component={() => <QuestionList questions={questions3} />} />

          <Pagination>
            <Pagination.Item><Link to="/">1</Link></Pagination.Item>
            <Pagination.Item><Link to="/2">2</Link></Pagination.Item>
            <Pagination.Item><Link to="/3">3</Link></Pagination.Item>
          </Pagination>
        </Jumbotron>
      </Container>
    </Router>
  );
}

export default App;
