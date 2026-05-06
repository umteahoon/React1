// import styles from "./ButtonCom.module.css";

// export default function ButtonCom() {
//   // 클릭 이벤트 핸들러 함수
//   const handleClick = (e) => {
//     // e.target.className을 통해 실제 적용된 클래스명을 가져옵니다.
//     const className = e.target.className;
//     alert(`클릭한 버튼의 클래스 이름은: \n${className}`);
//     console.log("전체 클래스 정보:", className);
//   };

//   return (
//     <section className={styles.container}>
//       <h1 className={styles.title}>ButtonCom 컴포넌트</h1>
      
//       <nav className={styles.navBar}>
//         {/* onClick에 함수 이름만 연결합니다. */}
//         <button 
//           onClick={handleClick} 
//           className={styles.button}
//         >
//           버튼 1
//         </button>

//         <button 
//           onClick={handleClick} 
//           className={styles.button}
//         >
//           버튼 2
//         </button>
//       </nav>
//     </section>
//   );
// }


import styles from "./ButtonCom.module.css";

export default function Button({ message, children }) {
  const handleClick = (e) => {
    // 1. 전달받은 message prop을 alert으로 출력
    alert(`메시지: ${message}`);
    
    // 2. 클릭된 버튼의 클래스 이름 출력
    console.log("클릭된 버튼 클래스:", e.target.className);
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      {children}
    </button>
  );
}