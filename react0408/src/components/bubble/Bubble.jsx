import style from "./Bubble.module.css";

// 자식 컴포넌트: Button
function Button({ onClick, children }) {
  return (
    <button 
      className={style.button} 
      onClick={(e) => {
        // 이벤트 전파를 중단시킵니다. 
        // 이 줄이 있으면 버튼 클릭 시 부모(nav)의 알림창이 뜨지 않습니다.
        e.stopPropagation(); 
        onClick();
      }}
    >
      {children}
    </button>
  );
}

// 부모 컴포넌트: Bubble
export default function Bubble() {
  return (
    <>
      <h1 className={style.title}>Bubble</h1>
      {/* 부모 요소인 nav에도 클릭 이벤트가 걸려 있습니다. */}
      <nav 
        className={style.navBar} 
        onClick={() => alert("네비게이션바 클릭!")}
      >
        <Button onClick={() => alert("버튼1 클릭!")}>
          버튼1
        </Button>
        
        <Button onClick={() => alert("버튼2 클릭!")}>
          버튼2
        </Button>
      </nav>
    </>
  );
}