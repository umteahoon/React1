import PackingList from './components/PackingList';
import MovieHeroes from "./components/MovieHeroes";
import Kiosk from './components/Kiosk';
import TeaSet from './components/TeaSat';
import TeaGathering from './components/TeaGathering';

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
      {/* <TeaSet/> */}s

      <TeaGathering/>
    </div>
  );
}
export default App;