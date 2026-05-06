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

export default function ButtonCom({ message, handle, children }) {
  return (
    <button 
      className={styles.button} 
      onClick={() => handle(message)} // 전달받은 함수에 메시지를 넣어 실행
    >
      {children}
    </button>
  );
}