export default function Signup2() {
  return (
    <form onSubmit={(e) => {
      // 2. 브라우저의 기본 동작(페이지 새로고침)을 방지합니다.
      e.preventDefault(); 
      alert('Submitting!');
    }}>
      <input />
      <button>Send2</button>
    </form>
  );
}