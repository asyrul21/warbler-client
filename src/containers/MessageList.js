import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMessages, removeMessage } from "../store/actions/messages";
import MessageItem from "../components/MessageItem";

class MessageList extends Component {
  componentDidMount() {
    this.props.fetchMessages();
  }

  renderMessageList = (messages, currentUser, removeMessage) => {
    return messages
      ? messages.map((m) => {
          return (
            <MessageItem
              key={m._id}
              date={m.createAt}
              text={m.text}
              username={m.user.username}
              profileImageUrl={m.user.profileImageUrl}
              removeMessage={removeMessage.bind(this, m.user._id, m._id)}
              isCorrectUser={currentUser._id === m.user._id}
            />
          );
        })
      : [];
  };

  render() {
    const { messages, removeMessage, currentUser } = this.props;
    return (
      <div className="row col-sm-8">
        <div className="offset-1 col-sm-10">
          <ul className="list-group" id="messages">
            {messages &&
              this.renderMessageList(messages, currentUser, removeMessage)}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    currentUser: state.currentUser,
  };
}

export default connect(mapStateToProps, { fetchMessages, removeMessage })(
  MessageList
);
