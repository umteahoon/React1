// import PackingList from './components/PackingList';
// import MovieHeroes from "./components/MovieHeroes";
// import Kiosk from './components/Kiosk';
// import TeaSet from './components/TeaSat';
// import TeaGathering from './components/TeaGathering';
// import ButtonCom from "./components/Buttoncom/ButtonCom";
// import Toolbar from "./components/Buttoncom/Toolbar";
// import Bubble from "./components/bubble/Bubble";
// import Signup1 from "./components/Signup1";
// import Signup2 from "./components/Signup2";
import Carousel from "./components/Carousel/Carousel";

function App() {
  return (
    <div className="App">
      {/* 1. 패킹 리스트 */}
      {/* <PackingList /> */}
      
      {/* 2. 데이터 필터링  */}
      {/* <MovieHeroes /> */}

      {/* 3. Kiosk 컴포넌트 렌더링 */}
      {/* <Kiosk /> */}

      {/* 4. TeaGathering  1번부터 12번까지 출력 */}
      {/* <TeaSet/> */}
      {/* <TeaGathering/> */}

      {/* 5. ButtonCom 컴포넌트 추가 */}
      {/* <ButtonCom /> */}

      {/* 6. 이벤트 핸들러에서 Prop 사용하기 실습 */}
      {/* <Toolbar /> */}


      {/* 7. 이벤트 전파 실습 */}
      {/* <Bubble /> */}

      {/* Signup1: 기본 동작 유지 (새로고침 발생) */}
      {/* <Signup1 /> */}
      
      {/* Signup2: 기본 동작 방지 (새로고침 없음) */}
      {/* 3. 루트 컴포넌트에서 Signup2를 추가로 호출합니다. */}
      {/* <Signup2 /> */}

      {/* 9. 루트 컴포넌트에서 Carousel을 추가로 호출합니다. */}
      <Carousel />
    </div>
  );
}

export default App;