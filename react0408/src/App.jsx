import PackingList from './components/PackingList';
import HeroList from './components/HeroList';

function App() {
  return (
    <div className="App">
      {/* 기존에 있던 패킹 리스트 */}
      {/* <PackingList /> */}
      
      {/* 2. 새로 만든 히어로 리스트 호출 */}
      <HeroList />
    </div>
  );
}
export default App;