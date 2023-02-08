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

//------------------------------------------------------------------------------

// 함수 컴포넌트로 변경(class 컴포넌트는 이제 거의 사용하지 않는다)
import React, { useState } from "react";

function ConfirmButton(props) {
  const [isConfirmed, setIsConfirmed] = useState(false);

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
