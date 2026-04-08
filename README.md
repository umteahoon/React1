# ⚛️ React 학습 저장소 (2026)

## 📅 2주차: Node.js 기초 및 React의 핵심 철학 (3월 11일)

### 1. Node.js란 무엇인가?
* **탄생 배경**: 2009년 라이언 달(Ryan Dahl) 개발. 기존 Apache 서버의 **블로킹(Blocking)** 문제를 해결하기 위해 **비동기(Asynchronous)** 방식의 서버 필요성 대두.
* **핵심 엔진**: Chrome의 **V8 엔진** (당시 가장 빠른 브라우저 엔진).

#### 🎯 주요 활용 분야
| 분야 | 설명 | 예시 |
| :--- | :--- | :--- |
| **웹 서버** | REST API, GraphQL API 개발 | Express.js, Nest.js |
| **실시간 앱** | 채팅, 알림, 스트리밍 | Socket.io |
| **서버리스** | FaaS(Function as a Service) | AWS Lambda |
| **CLI 도구** | 커맨드라인 유틸리티 | npm, npx |

#### ✅ 장점과 ❌ 단점
* **장점**: 비동기 논 블로킹 I/O 성능, JS 풀스택 개발 가능, 방대한 npm 생태계.
* **단점**: 싱글 스레드 기반이라 CPU 집약 작업에 부적합, 콜백 지옥(Callback Hell) 위험, npm 패키지 보안 취약점 주의.

---

### 2. React의 진화와 방향
* **역사**: 2013년 5월 29일 Facebook의 Jordan Walke가 공개.
* **정체성 변화**: 단순 "JS 라이브러리"에서 **"웹 및 네이티브 UI를 위한 표준 라이브러리"**로 진화.

---

### 3. 개발 방식의 차이: 명령형 vs 선언형

#### ❌ React 이전 (명령형)
* **방식**: "어떻게(How)" 할지를 명시. 직접 DOM을 선택하고 조작.
* **문제**: 상태 추적이 어렵고 사이드 이펙트(Side Effect) 발생 위험이 높음.

#### ✅ React 방식 (선언형)
* **핵심 공식**: `UI = f(state)` (UI는 상태의 결과물)
* **특징**: 화면을 직접 고치지 않고 **상태(state)를 변경**하면 React가 자동으로 UI를 재계산(렌더링)함.

---

### 4. 렌더링(Rendering)의 진실
> "렌더링은 단순히 화면을 그리는 것이 아니라, **현재 상태를 기준으로 UI를 다시 계산하는 과정**입니다."

1.  **상태 변경** 발생
2.  새로운 화면 모습 **계산**
3.  이전 결과와 **비교 (Diffing)**
4.  필요한 **DOM 변경만 수행** (최적화)

---

### 5. React 전문가의 3가지 조건
1.  **State**: "왜 이 상태가 여기 위치해야 하는가?" 설명 가능
2.  **Rendering**: "왜 컴포넌트가 다시 그려지는가?" 이해
3.  **Effect**: "Effect가 왜 필요한지(혹은 필요 없는지)" 판단 가능

---

# 📅 3주차: React 개발 환경 구축 및 프로젝트 생성 (3월 18일)

### 1. 개발 환경 구축 (Node.js)
* **설치**: 공식 사이트(nodejs.org) LTS 버전 권장 (**v22.14.0** 기준).
* **도구 확인**:
    * `npm`: 패키지 관리자
    * `npx`: 패키지 실행 도구
* **버전 확인**: `node -v`, `npm -v`

---

### 2. 프로젝트 생성 (Vite 활용)
* **CRA 지원 중단**: 2025년 2월부로 Create React App 지원 중단.
* **Vite 선택 이유**: **프랑스어로 "빠르다"**, 빌드 속도가 압도적이며 가벼운 설정 제공.

#### 📋 생성 단계
1.  `npm create vite@latest my-app`
2.  Framework: `React` 선택
3.  Variant: `JavaScript + SWC` (Rust 기반의 빠른 컴파일러)
4.  `cd my-app` -> `npm install` -> `npm run dev`

---

### 3. 프로젝트 구조 이해
* `index.html`: 앱의 뼈대. `<div id="root"></div>`가 마운트 지점.
* `src/main.jsx`: 앱의 진입점(Entry Point).
* `src/App.jsx`: 실제 UI를 작성하는 메인 컴포넌트.
* `package.json`: 프로젝트 정보 및 의존성 라이브러리 목록.

> ⚠️ **주의**: 프로젝트 생성 후 자동으로 Git 초기화가 되지 않으므로 직접 `git init` 명령어를 수행해야 합니다.

---

### 4. 컴포넌트 및 JSX 기초

#### 📌 컴포넌트 작성 체크리스트
- [ ] PascalCase 네이밍 사용 (예: `UserCard`)
- [ ] UI를 독립적이고 재사용 가능하게 설계했는가?
- [ ] 어떤 기능을 수행하는지 명확한가?

#### 💻 주요 문법 (App.jsx)
| 문법 | 설명 | 예시 |
| :--- | :--- | :--- |
| **import** | 모듈/이미지 가져오기 | `import logo from './logo.svg'` |
| **useState** | 상태 관리 Hook | `const [count, setCount] = useState(0)` |
| **Fragment** | 불필요한 DOM 생성 방지 | `<> ... </>` |
| **export** | 컴포넌트 내보내기 | `export default App` |

---



