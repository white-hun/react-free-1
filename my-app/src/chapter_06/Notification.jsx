import React from "react";
import { useMemo } from "react";
import { Children } from "react";

const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    diaplay: "flex",
    flexDirection: "row",
    border: "1px solid grey",
    borderRadius: 16,
  },
  messageText: {
    color: "black",
    fontSize: 16,
  },
};

class Notification extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}; // state에 아무런 값 없음
  }

  componentDidMount() {
    console.log(`${this.props.id} componentDidMount() called.`);
  }
  componentDidUpdate() {
    console.log(`${this.props.id} componentDidUpdate() called.`);
  }
  componentWillUnmount() {
    console.log(`${this.props.id} componentWillUnmount() called.`);
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <span style={styles.messageText}>{this.props.message}</span>
      </div>
    );
  }
}

export default Notification;
