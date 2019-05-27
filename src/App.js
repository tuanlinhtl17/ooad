import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Container, Jumbotron, Pagination } from 'react-bootstrap';

import Question from './Question';

import { questions1 } from './databases/ooad/ooad1';
import { questions2 } from './databases/ooad/ooad2';
import { questions3 } from './databases/ooad/ooad3';

function App() {
  return (
    <Router>
      <Container>
        <Jumbotron>
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />

            <Pagination.Item><Link to="/">1</Link></Pagination.Item>
            <Pagination.Item><Link to="/2">2</Link></Pagination.Item>
            <Pagination.Item><Link to="/3">3</Link></Pagination.Item>

            <Pagination.Next />
            <Pagination.Last />
          </Pagination>

          <Route path="/" exact component={() => <Question questions={questions1}/>} />
          <Route path="/2" component={() => <Question questions={questions2}/>} />
          <Route path="/3" component={() => <Question questions={questions3}/>} />
        </Jumbotron>
      </Container>
    </Router>
  );
}

export default App;