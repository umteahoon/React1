# ⚛️ React 학습 저장소 (2026)  202230119 엄태훈

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

#

## 📅 4주차: Vite 업데이트와 컴포넌트 설계의 기초 (3월 25일)

### 1. Vite의 트랜스파일러 변경사항 (2026.03.19 이후)
- **주요 변경점**: 2026년 3월 19일 이후 Vite로 프로젝트 생성 시 트랜스파일러 선택 메뉴에서 `JavaScript + SWC` 옵션이 제거되었습니다.
- **기본값 변경**: 이전에는 JavaScript 선택 시 Babel이 설정되었으나, 현재는 **Oxc가 기본 트랜스파일러로 설정**됩니다.
- **프로젝트 생성 방법**:
  - ❌ 이전 방식 (더 이상 사용 불가): `npm create vite@latest my-app --template react-swc`
  - ✅ **현재 방식**: `npm create vite@latest my-app --template react` (인터랙티브 메뉴에서 JavaScript 선택)
- **설정 확인**: `vite.config.js` 파일에서 `plugins: [react()]` 설정을 통해 기본 Oxc 기반 설정을 확인할 수 있습니다.

---

### 2. 차세대 도구 비교: Oxc vs SWC
두 도구 모두 Rust 언어로 작성되어 JavaScript 기반의 Babel보다 압도적으로 빠릅니다.

- **SWC (Speedy Web Compiler)**:
  - 용도: Babel 대체 컴파일러 및 번들러.
  - 특징: 트랜스파일링(TS→JS)과 번들링에 특화되어 있으며 Next.js 등에서 기본 사용 중.
- **Oxc (Oxidation Compiler)**:
  - 용도: ESLint, Prettier, TS 트랜스파일러 등을 모두 통합하려는 고성능 도구 모음.
  - **특징**: 
    - 파싱(Parsing) 속도가 **SWC보다 3배 이상 빠름**.
    - ESLint보다 **100배 이상 빠른** 린팅(Linting) 성능 제공.
- **권장사항**: 특별한 사유가 없다면 속도가 더 빠른 Oxc(기본값)를 사용하는 것이 권장됩니다.

---

### 3. 컴포넌트의 생성 및 사용
- **생성 단계**:
  1. 컴포넌트 이름과 동일한 이름의 파일 생성 (`PascalCase`).
  2. `export default` 키워드를 사용하여 외부에서 쓸 수 있게 함.
  3. `function` 본문 내부(중괄호 `{}`)에 컴포넌트 로직 구현.
  4. `return` 구문 소괄호 `()` 내부에 반환할 JSX 마크업 작성.
- **사용 방법**:
  - 사용하려는 파일 상단에서 컴포넌트를 `import` 함.
  - 임포트한 이름을 `<컴포넌트명 />` 형태로 호출하여 사용.

---

### 4. 컴포넌트 중첩(Nesting)의 개념과 실습
- **개념**: 특정 컴포넌트를 다른 컴포넌트 **안에서 호출**하는 것을 의미합니다.
- **⚠️ 주의 (중요)**: 컴포넌트 **내부에서 다른 컴포넌트를 '선언(정의)'하는 것은 잘못된 방법**입니다. 반드시 최상위 레벨에서 각각 선언하고 호출만 중첩해야 합니다.
- **디렉토리 관리**:
  - 컴포넌트가 많아지면 `/src/components/` 디렉토리를 생성하여 별도로 관리합니다.
  - **예시 구조**: `Gallery` 컴포넌트 내부에 `Profile` 컴포넌트를 중첩하고, 최종적으로 `App.jsx`에서 `Gallery`를 렌더링함.



---

### 5. 컴포넌트 분리 및 관리 권장사항
- **파일 분리**: 프로젝트 루트에 파일이 너무 많아지지 않도록 기능별로 분리합니다.
- **루트 컴포넌트(`App.jsx`)의 역할**: 
  - 최종적으로 렌더링할 컴포넌트들을 모아두는 '그릇' 역할로 사용합니다.
  - 가능하면 `App.jsx` 내부에서 새로운 컴포넌트를 직접 정의하지 않는 것이 좋습니다.
- **계층 구조**: `/src/components/` 내부에 기능별 하위 디렉토리를 만들어 체계적으로 관리합니다.

---

### 6. Export와 Import (가져오기 및 내보내기)
| 구분 | Default Export | Named Export |
| :--- | :--- | :--- |
| **선언 방식** | `export default function Button() {}` | `export function Button() {}` |
| **가져오기** | `import Button from './button.js'` | `import { Button } from './button.js'` |
| **특징** | 파일당 **단 하나**만 가능 | 한 파일에 **여러 개** 가능 |

- **Named Export 활용법**:
  - 여러 개 가져오기: `import { Com1, Com2 } from './files.js'`
  - 이름 변경하기: `import { Button as MyButton } from './button.js'`
  - 전체 가져오기(Namespace): `import * as All from './files.js'`

---

### 7. JSX(JavaScript XML)의 3가지 규칙
React 컴포넌트는 JavaScript 함수이며, 마크업 작성을 위해 JSX 문법을 따릅니다.

1. **하나의 루트 엘리먼트로 반환**: 반드시 하나의 태그로 감싸야 하며, 불필요한 태그를 줄이려면 Fragment(`<>...</>`)를 사용합니다.
2. **모든 태그 닫기**: `<br />`이나 `<img>` 같이 닫는 태그가 없는 HTML 태그도 반드시 끝에 `/`를 넣어 닫아줘야 합니다.
3. **카멜 케이스(camelCase) 속성 사용**: HTML의 `class`는 `className`으로, `onclick`은 `onClick`으로 작성합니다.

- **표기법 정리**:
  - **파스칼 케이스(PascalCase)**: 컴포넌트 이름 (예: `HeaderContent`)
  - **카멜 케이스(camelCase)**: JSX 속성 이름 (예: `tabIndex`, `strokeWidth`)


---

## 📅 5주차: Props를 통한 컴포넌트 통신 (4월 1일)

### 1. 개요
- **정의**: Props(properties)는 React 컴포넌트들이 서로 통신하기 위해 사용하는 수단입니다.
- **역할**: 부모 컴포넌트가 자식 컴포넌트에게 데이터를 전달할 때 사용합니다.
- **유연성**: 객체, 배열, 함수를 포함한 모든 JavaScript 값을 전달할 수 있습니다.

---

### 2. 핵심 용어 정의
| 용어 | 정의 | 예시 |
| :--- | :--- | :--- |
| **태그 (Tag)** | 요소를 표시하기 위한 개별 기호 | `<div>`, `<li>` 등 |
| **엘리먼트 (Element)** | 여는 태그 + 내용 + 닫는 태그 전체 | `<p>내용</p>` |
| **어트리뷰트 (Attribute)** | HTML 태그 안의 정적인 속성 | `<img src="...">`의 `src` |
| **프로퍼티 (Property)** | DOM 객체 내의 동적인 속성 | JS로 제어되는 `input.value` |

- **차이점**: 사용자가 값을 입력하면 **Property**는 변하지만, HTML의 **Attribute**는 초기값 그대로 유지됩니다.

---

### 3. Props를 통한 컴포넌트 통신 원리
- **부모 컴포넌트**: 데이터를 전달하는 주체 (Parent).
- **자식 컴포넌트**: 받은 Props를 사용해 UI를 생성하는 객체 (Child).

#### ✨ Props의 3가지 특징
1. **단방향 흐름**: 데이터는 항상 부모에서 자식으로만 흐릅니다.
2. **읽기 전용**: 자식 컴포넌트는 받은 Props를 직접 수정할 수 없습니다.
3. **다양한 타입**: 모든 JS 데이터 타입을 전달할 수 있습니다.

---

### 4. Props 전달 방법 실습

#### (1) 기본 Props 전달 (문자열 및 숫자)
- 문자열은 따옴표(`""`), 숫자는 중괄호(`{}`)를 사용합니다.

```jsx
// ParentComp.jsx
import ChildComp from "./ChildComp";

export default function ParentComp() {
  return (
    <section>
      <ChildComp
        alt="React Logo"   // 문자열 전달
        width={100}         // 숫자 전달
        height={100}
      />
    </section>
  );
}

```
---

#### (2) 객체 형태의 Props 전달
- 중괄호 안에 객체를 넣는 형태(`{{ }}`)로 전달합니다. 
- **바깥 중괄호**: JSX 표현식(JavaScript를 쓰겠다)임을 의미합니다.
- **안쪽 중괄호**: 실제 JavaScript 객체(Object)를 의미합니다.

```jsx
// ParentComp.jsx
import ChildComp from "./ChildComp";
import reactLogo from "../assets/react.svg";

export default function ParentComp() {
  return (
    <ChildComp
      imageInfo={{
        src: reactLogo,
        alt: "React",
      }}
      size={100}
    />
  );
}
```

---

### 5. JSX 내에서 JavaScript 활용
- 중괄호 `{}`를 사용하면 마크업 안에서 동적인 데이터나 함수 호출 결과를 출력할 수 있습니다.
```jsx
// /src/components/UseJsx.jsx
export default function UseJsx() {
  const name = "React";

  function formatDate(date) {
    return new Intl.DateTimeFormat("en-US", { 
      weekday: "long" 
    }).format(date);
  }

  return (
    <>
      <h1>Hello, {name}!</h1>
      <p>Today is {formatDate(new Date())}</p>
    </>
  );
}
```
---

### 6. 실습 단계 및 코드 작성 팁
- **Step 1~2**: 실습에 사용할 `ParentComp`(부모)와 `ChildComp`(자식)를 생성하고, `App.jsx`에서 부모 컴포넌트를 호출하도록 설정합니다.
- **Step 3~6**: `ParentComp`에서 이미지의 `size`나 `alt` 정보를 객체 형태로 전달하고, 자식 컴포넌트에서 이를 받아 렌더링 정보를 수정하는 실습을 진행합니다.
- **가독성 팁**: 속성(Props)이 많을 경우 한 줄로 길게 쓰기보다 **한 줄에 하나씩 분리**하여 작성하는 것이 유지보수와 협업 시 가독성 측면에서 훨씬 유리합니다.

---

### ✅ 5주차 핵심 요약
- **Props**는 부모에서 자식으로 데이터를 전달하는 **유일한 통로**입니다.
- **전달 문법**: 데이터 타입에 따라 구분합니다. (문자열: `" "`, 그 외 숫자/객체/함수: `{ }`)
- **읽기 전용**: 자식은 받은 Props를 읽을 수는 있지만 **절대 직접 변경해서는 안 됩니다.**
- **JSX의 힘**: 중괄호 `{}`는 JavaScript의 강력한 로직을 마크업(HTML)에 결합하는 핵심 도구입니다.