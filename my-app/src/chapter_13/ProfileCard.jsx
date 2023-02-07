import Card from "./Card";

function ProfileCard(props) {
  return (
    <Card title="Spacer white" backgroundColor="#252525">
      <p>Hi I'm white'</p>
      <p>I'm developing with React</p>
    </Card>
  );
}

export default ProfileCard;

// // 현재 선택된 테마를 기존 방식을 사용하여 컴포넌트의 props로 전달하는 컴포넌트
// function App(props) {
//   // theme라는 이름으로 현재 테마인 dark를 넘긴다
//   return <Toolbar theme="dark" />;
// }

// // 현재 테마를 필요로 한다
// // prop 으로 전달받은 theme를 하위 컴포넌트(ThemedButton)로 전달
// function Toolbar(props) {
//   // 이 Toolbar 컴포넌트는 ThemedButton에 theme를 넘겨주기 위해서 'theme' prop을 가져야만 한다.
//   // 현재 테마를 알아야 하는 모든 버튼에 대해서 props로 전달하는 것은 굉장히 비효율적이다.
//   return (
//     <div>
//       <ThemedButton theme={props.theme} />
//     </div>
//   );
// }

// // props.theme으로 데이터에 접근하여 버튼에 테마를 입히게 된다
// function ThemedButton(props) {
//   return <Button theme={props.theme} />;
// }

// // context는 데이터를 매번 컴포넌트를 통해 전달할 필요 없이 컴포넌트 트리로 곧바로 전달하게 해준다
// // 여기에서는 현재 테마를 위한 context를 생성하며, 기본값은 "light"
// const ThemeContext = React.createContext("light");

// // Provider를 사용하여 하위 컴포넌트들에게 현재 테마 데이터를 전달한다
// // 모든 하위 컴포넌트들은 컴포넌트 트리 하단에 얼마나 깊이 있는지에 관계없이 데이터를 읽을 수 있다
// // 여기에서는 현재 테마값으로 'dark'를 전달하고 있다
// function App(props) {
//   return (
//     <ThemeContext.Provider value="dark">
//       <Toolbar />
//     </ThemeContext.Provider>
//   );
// }

// //중간에 위치한 컴포넌트는 테마 데이터를 하위 컴포넌트로 전달 할 필요가 없다
// function Toolbar(props) {
//   return (
//     <div>
//       <ThemedButton />
//     </div>
//   );
// }

// function ThemedButton(props) {
//   // React는 가장 가까운 상위 테마 Provider를 찾아서 해당되는 값을 사용한다
//   // 만약 해당되는 Provider가 없을 경우 기본값(여기에서는 'light')을 사용한다
//   // 여기에서는 상위 Provider가 있기 때문에 현재 테마의 값은 'dark'가 된다
//   return <ThemeContext.Consumer>{(value) => <Button theme={value} />}</ThemeContext.Consumer>;
// }
