import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import Message from "./Message";

import configureStore from "../configureStore";
const store = configureStore();

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Provider store={store}>
        <Router>
          <Routes>
           <Route exact path="/" element={ ('Hello') } />
           <Route path="/greating" element={<Message greeting= {'Hello'} />} />
          </Routes>
        </Router>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
