import Card from "./Card";

function ProfileCard(props) {
  // Card  컴포넌트 안에 있는 모든 JSX 태그는 Card.jsx의 children으로 이동
  // <p> 태그가 하위 컴포넌트
  return (
    <Card title="Spacer white" backgroundColor="#252525">
      <p>Hi I'm White, Spacer</p>
      <p>I'm developing with React</p>
    </Card>
  );
}

export default ProfileCard;