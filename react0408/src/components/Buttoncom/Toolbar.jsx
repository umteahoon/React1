import Button from "./ButtonCom";

export default function Toolbar() {
  return (
    <nav style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h3>툴바 컴포넌트</h3>
      <Button message="영화를 재생합니다!">영화 재생</Button>
      <Button message="업로드를 시작합니다!">파일 업로드</Button>
    </nav>
  );
}