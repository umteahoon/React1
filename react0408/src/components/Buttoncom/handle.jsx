// export default function handleClick(message) {
//   alert(message);
// }

// 재생 함수
export const handlePlay = (id) => {
  const video = document.getElementById(id);
  if (video) video.play();
};

// 정지 함수
export const handleStop = (id) => {
  const video = document.getElementById(id);
  if (video) {
    video.pause();
    video.currentTime = 0; // 정지 시 처음으로 되돌리기
  }
};