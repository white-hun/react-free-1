// 함수 컴포넌트로 변경(class 컴포넌트는 이제 거의 사용하지 않는다)
import React, { useState } from "react";

function ConfirmButton(props) {
  const [isConfirmed, setIsConfirmed] = useState(false);

  // setState 함수에는 set하고 싶은 값을 직접 넣거나
  // 새로운 값을 리턴하는 함수를 넣을 수 있다
  // 함수를 넣게 되면 함수 파라미터로 바로 직전의 state가 전달된다
  // 바로 직전의 state인 prevIsConfirmed의 값을 받아서 boolean 값을 반전 시켜 return
  // 함수를 넣는 이유는 확실하게 이전 값을 가지고 변경을 한 뒤에 return하기 위해서이다
  // 곧바로 값을 넣어서 state를 변경하는 경우 짧은 시간에 빠르게 state가 여러번 변경될 때
  // 이전 값을 보장하지 못하기 때문이다
  const handleConfirm = () => {
    setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
  };

  return (
    <button onClick={handleConfirm} disabled={isConfirmed}>
      {isConfirmed ? "확인됨" : "확인하기"}
    </button>
  );
}

export default ConfirmButton;

//------------------------------------------------------------------------------

// import React from "react";

// class ConfirmButton extends React.Component {
//   constructor(props) {
//     super(props);

//     // 확인여부를 저장하기위해 isConfirmed 변수을 가지고 있으면 초기값 false
//     this.state = {
//       isConfirmed: false,
//     };
//     this.handleConfirm = this.handleConfirm.bind(this);
//   }

//   // 클릭이벤트를 처리하기 위해 event handler로 handleConfirm 함수 추가
//   handleConfirm() {
//     this.setState((prevState) => ({
//       isConfirmed: !prevState.isConfirmed,
//     }));
//   }

//   render() {
//     return (
//       <button onClick={this.handleConfirm} disabled={this.state.isConfirmed}>
//         {this.state.isConfirmed ? "확인됨" : "확인하기"}
//       </button>
//     );
//   }
// }

// export default ConfirmButton;

//------------------------------------------------------------------------------

// // Class fields syntax 사용
// import React from "react";

// class ConfirmButton extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isConfirmed: false,
//     };
//     // this.handleConfirm = this.handleConfirm.bind(this); bind 코드 제거
//   }

//   // Arrow function으로 변경
//   handleConfirm = () => {
//     this.setState((prevState) => ({
//       isConfirmed: !prevState.isConfirmed,
//     }));
//   };

//   render() {
//     return (
//       <button onClick={this.handleConfirm} disabled={this.state.isConfirmed}>
//         {this.state.isConfirmed ? "확인됨" : "확인하기"}
//       </button>
//     );
//   }
// }

// export default ConfirmButton;
