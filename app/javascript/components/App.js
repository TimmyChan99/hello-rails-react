import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Message from "./Message";

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Router>
          <Routes>
           <Route exact path="/" element={ ('Hello') } />
           <Route path="/greating" element={<Message greeting= {'Hello'} />} />
          </Routes>
        </Router>
      </React.Fragment>
    );
  }
}

export default App
