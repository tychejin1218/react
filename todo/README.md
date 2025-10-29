# React To-Do

React + React-Bootstrap 기반의 간단한 **할 일(To-Do)** 관리 프로젝트입니다.  
프론트엔드 구조 및 React 기본 개념을 이해하기 위해 만든 학습용 프로젝트입니다.

---

## 실행 방법

### 1. Node & npm 버전 확인
이 프로젝트는 **Node.js v24.10 이상**과 **npm v11.6 이상**에서 정상 동작합니다.  
버전 확인 방법:
```bash
node -v   # Node 버전 확인
npm -v    # npm 버전 확인 
```
버전이 낮다면 Node.js 공식 홈페이지에서 최신 버전을 설치해주세요.

### 2. 패키지 설치
프로젝트 루트에서 아래 명령어 실행:
```bash
npm install
```
설치가 완료되면 node_modules/ 폴더가 생성되고, 의존성이 모두 설치됩니다.

### 3. 개발 서버 실행
```bash
npm start
```
개발 서버가 실행되면 자동으로 브라우저가 열리거나, 아래 주소로 접속 가능:
```text
http://localhost:3000
```
서버를 종료하려면 터미널에서 Ctrl + C 를 누릅니다.

### 4. 빌드 (선택 사항)
```bash
npm run build
```
배포용 정적 파일이 build/ 폴더에 생성됩니다.

---

## 프로젝트 구조

```bash
todo/
├── .idea/                    # IntelliJ IDEA 설정 파일
├── node_modules/             # npm 의존성 패키지들
├── public/                   # 정적 파일
│   ├── favicon.ico
│   ├── index.html            # React 앱이 마운트되는 HTML
│   ├── manifest.json
│   └── robots.txt
│
├── src/                        # 실제 소스 코드 (핵심 영역)
│   ├── components/             # React 컴포넌트들
│   │   ├── Main.js             # 메인 페이지 (소개 화면)
│   │   ├── TodoDetail.js       # 할 일 상세 보기
│   │   └── TodoList.js         # 할 일 목록 + 필터링
│   │
│   ├── services/               # API 통신 로직
│   │   └── api.js              # Axios 기반 API 함수들
│   │
│   ├── App.css                 # App 컴포넌트 스타일
│   ├── App.js                  # 라우터 설정 (메인 앱)
│   ├── index.css               # 전역 스타일
│   ├── index.js                # React 진입점 (ReactDOM.render)
│   ├── logo.svg
│   ├── reportWebVitals.js      # 성능 측정
│   └── setupTests.js           # 테스트 설정
│
├── .gitignore
├── .prettierrc                 # Prettier 설정
├── eslint.config.mjs           # ESLint 설정
├── package.json                # npm 패키지 정의
├── package-lock.json           # 의존성 잠금 파일
└── README.md                   # 프로젝트 문서
```

---

## 사용 기술 스택

### 프론트엔드 프레임워크 & 라이브러리

| 구분 | 기술 | 버전 | 용도 |
|------|------|------|------|
| Framework | React | 19.2.0 | UI 컴포넌트 기반 개발 |
| Rendering | React-DOM | 19.2.0 | DOM 렌더링 |
| Build Tool | React Scripts (CRA) | 5.0.1 | 개발 서버 & 빌드 도구 |

---

### 상태 관리 & 데이터 페칭

| 구분 | 기술 | 버전 | 용도 |
|------|------|------|------|
| HTTP Client | Axios | 1.12.2 | 백엔드 API 통신 |

---

### 라우팅

| 구분 | 기술 | 버전 | 용도 |
|------|------|------|------|
| Routing | React Router DOM | 7.9.4 | 클라이언트 사이드 라우팅 |

---

### 스타일링

| 구분 | 기술 | 버전 | 용도 |
|------|------|------|------|
| UI Framework | Bootstrap | 5.3.8 | CSS 프레임워크 |
| React UI | React-Bootstrap | 2.10.10 | Bootstrap의 React 컴포넌트 |

---

### 테스팅

| 구분 | 기술 | 버전 | 용도 |
|------|------|------|------|
| Testing Library | @testing-library/react | 16.3.0 | React 컴포넌트 테스트 |
| DOM Testing | @testing-library/dom | 10.4.1 | DOM 쿼리 & 이벤트 |
| Jest Matchers | @testing-library/jest-dom | 6.9.1 | Jest용 DOM Matcher |
| User Simulation | @testing-library/user-event | 13.5.0 | 사용자 이벤트 시뮬레이션 |

---

### 개발 도구 (DevDependencies)

| 구분 | 기술 | 버전 | 용도 |
|------|------|------|------|
| Transpiler | Babel Core | 7.28.4 | 최신 JS → 구형 브라우저 호환 코드 변환 |
| Linter | ESLint | 8.57.1 | 코드 품질 검사 |
| Formatter | Prettier | 3.6.2 | 코드 포맷팅 |
| ESLint Plugin | eslint-plugin-react | 7.37.5 | React 전용 ESLint 규칙 |
| ESLint Plugin | eslint-plugin-react-hooks | 7.0.0 | React Hooks 규칙 검사 |

---

### 성능 측정

| 구분 | 기술 | 버전 | 용도 |
|------|------|------|------|
| Performance | Web Vitals | 2.1.4 | 웹 성능 지표 측정 (CLS, FID, LCP 등) |

---

### React 주요 개념 요약

| 개념 | 설명 |
|------|------|
| Component | UI를 재사용 가능한 단위로 분리 |
| Props | 부모 → 자식 데이터 전달 (불변) |
| State | 컴포넌트 내부 상태 관리 (useState) |
| Lifecycle / Effect | 렌더링 / 업데이트 시점 로직 (useEffect) |
| Router | SPA 구조 페이지 전환 |
| Axios 통신 | 백엔드 REST API 호출 구조 |
| React Query | 서버 데이터 캐싱 / 리페칭 관리 |
| Bootstrap UI | 컴포넌트 기반 빠른 UI 구성 |
