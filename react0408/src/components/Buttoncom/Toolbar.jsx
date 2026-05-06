// import handleClick from "./handle.jsx";
// import ButtonCom from "./ButtonCom";

// export default function ToolBar() {
//   return (
//     <>
//       <ButtonCom message="버튼1 클릭" handle={handleClick}>
//         버튼11111
//       </ButtonCom>
      
//       <ButtonCom message="버튼2 클릭" handle={handleClick}>
//         버튼22222
//       </ButtonCom>
//     </>
//   );
// }

import { handlePlay, handleStop } from "./handle.jsx";
import ButtonCom from "./ButtonCom";
import myVideo from "../../assets/video.mp4"; // 영상 임포트

export default function ToolBar() {
  const videoId = "myMovie"; // 비디오 태그의 id

  return (
    <section>
      {/* 3. <video> 태그 추가 */}
      <video id={videoId} width="400" controls>
        <source src={myVideo} type="video/mp4" />
        브라우저가 비디오 태그를 지원하지 않습니다.
      </video>

      <nav style={{ marginTop: "10px" }}>
        {/* 4. video의 id를 message prop으로 전달 */}
        <ButtonCom message={videoId} handle={handlePlay}>
          영상 재생
        </ButtonCom>
        
        <ButtonCom message={videoId} handle={handleStop}>
          영상 정지
        </ButtonCom>
      </nav>
    </section>
  );
}