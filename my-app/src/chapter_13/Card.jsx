// 하위 컴포넌트를 감싸서 카드형태로 보여주는 컴포넌트
// children을 사용한 부분이 containment
// title, backgroundColor를 사용한 부분이 specialization
function Card(props) {
  const { title, backgroundColor, children } = props;

  // title이 있으면(true) title을 jsx 문법으로 감싸서 <h1> 태그에 넣는다
  // childern은 하위 컴포넌트를 하나로 모은다(containment)
  // jsx문법 camelcase 적용 
  return (
    <div
      style={{
        width: 300,
        margin: 8,
        padding: 8,
        borderRadius: 8,
        boxShadow: "0px 0px 4px grey",
        // attribute로 설정된 background-color 또는 white를 적용
        backgroundColor: backgroundColor || "white", 
        color: "white",
      }}
    >
      {title && <h1>{title}</h1>}
      {children}
    </div>
  );
}

export default Card;

 // Card 컴포넌트 <div> 안에 <h1>과 children으로가져온 <p>가 들어있는 형태
 //<div>
 //   <h1></h1>
 //   <p></p>
 //   <p></p>
 //</div>   
 