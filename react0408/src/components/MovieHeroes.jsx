// MovieHeroes 컴포넌트를 생성하고, map()함수를 사용하여 리스트를 출력 
// const heroes = [
//   '스파이더맨: 피터 파커',
//   '아이언맨: 토니 스타크',
//   '배트맨: 브루스 웨인',
//   '슈퍼맨: 클라크 켄트',
//   '헐크: 로버트 브루스 배너'
// ];

import { heroes } from "./HeroesData";

export default function MovieHeroes() {
  // 1. power가 5인 영웅들만 필터링 (여러 명이 배열에 담깁니다)
  const filterTests = heroes.filter(hero => 
    hero.power === 5
  );

  // 2. 필터링된 결과(슈퍼맨, 아이언맨, 헐크)를 화면에 표시
  const listHeroes = filterTests.map(hero => (
    <li key={hero.id}>
      <p>
        <b>{hero.casting}</b> (파워: {hero.power}) - 배역: {hero.name}
      </p>
    </li>
  ));

  return (
    <section>
      <h1>최강 파워 영웅 리스트 (Power: 5)</h1>
      <ul>
        {listHeroes}
      </ul>
    </section>
  );
}