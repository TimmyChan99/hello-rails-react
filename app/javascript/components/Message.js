import React from "react"
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from "prop-types"
import { createStructuredSelector } from 'reselect'
import { connect } from "react-redux";
import { getMessagesAction } from "../configureStore";

const Message = () =>  {

  const dispatch = useDispatch();
  const fetchedMessages = useSelector((state) => state)

  const getMessages = () => {
    console.log('action test');
    dispatch(getMessagesAction())
  }
  
    return (
      <React.Fragment>
        <h5><span>Greeting:</span>{ fetchedMessages.greeting }</h5>
        <button
        className="getMessages"
        onClick={ () => { getMessages() }}
        >click</button>
      </React.Fragment>
    );
  
}

export default Message

// const struturedSelector = createStructuredSelector({
//   message: state => state.message,
// })

// const mapDispatchToProps = { getMessages };

// Message.propTypes = {
//   greeting: PropTypes.string
// };

// export default connect(struturedSelector, mapDispatchToProps)(Message);
