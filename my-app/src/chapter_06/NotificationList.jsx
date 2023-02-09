import React from "react";
import Notification from "./Notification";

// Notification component를 목록형으로 보여주기 위한 component

const reservedNotifications = [
  {
    id: 1,
    message: "Let me tell you the schedual",
  },
  {
    id: 2,
    message: "Lunch time",
  },
  {
    id: 3,
    message: "It's time for a meeting soon",
  },
];

var timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [], // 빈 배열을 state에 넣음, 생성자에서는 앞으로 사용할 데이터를 state에 넣어 초기화
    };
  }

  // 매 1초 마다 정해진 작업을 수행
  // 위에서 만든 알림 데이터 배열인 reservedNotifications로 부터 알림 데이터를 하나씩 가져와서
  // state에 있는 notifications 배열에 넣고 업데이트
  componentDidMount() {
    const { notifications } = this.state;
    timer = setInterval(() => {
      if (notifications.length < reservedNotifications.length) {
        const index = notifications.length;
        notifications.push(reservedNotifications[index]);
        // state 업데이트 하기 위해서 setState 사용
        this.setState({
          notifications: notifications,
        });
      } else {
        this.setState({
          notifications: [], // 알림 추가가 끝나면 notifications 배열을 비운다
        });
        clearInterval(timer);
      }
    }, 1000);
  }

  // key는 map 함수를 사용할 때 필수 적으로 들어가야한다
  render() {
    return (
      <div>
        {this.state.notifications.map((notification) => {
          return <Notification key={notification.id} id={notification.id} message={notification.message} />;
        })}
      </div>
    );
  }
}

export default NotificationList;
