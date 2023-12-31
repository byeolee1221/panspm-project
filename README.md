# Pan's PM 동아리 웹사이트 프로젝트

## 프로젝트 소개
* 제작 계기: 동아리의 오프라인 홍보활동의 한계점을 극복하고, 좀 더 편리한 신입생 모집을 위해 만들게 되었습니다.
* 제작 기간: 2023.05.31 ~ 2023.08.07 (68일)
* 제작 인원: 1명 (프론트엔드 - 문창기)
* 사용 기술스택
  + 프론트엔드: HTML, CSS, Javascript, React
  + 데이터베이스: firebase realtime database
  + 배포 및 호스팅: Github Pages

## Architecture
![Alt text](/src/assets/panspm.jpg)

## Pan's PM 동아리 웹사이트가 기여할 수 있는 점
* 동아리에 관심있었던 사람이 동아리에 대해 신중히 판단할 수 있도록 해주고, 그 이후에 가입원서를 제출할 수 있어서 동아리의 홍보 및 문서업무면에서 효율성을 높여줍니다.
* 장기적으로 동아리의 활동영역이 폐쇄적인 네이버카페에서 개방된 독립 웹사이트로 확대되는 기대를 할 수 있습니다.
* 동아리 멤버뿐 아니라 타 동아리나 소속이 없는 사람도 가입이 가능하여 동아리를 널리 전파하고 알아가는 데 기여할 수 있습니다.

## 프로젝트 진행과정에서 생긴 문제와 해결방법
* 문제
  + 로그인이 됐는데 새로고침하거나 메뉴를 이동했을 때 로그인이 풀리는 문제가 발생함.
* 해결
  + 유저가 로그인을 성공하면 로컬스토리지에 로그인을 했다는 정보를 저장하고, 저장이 확인되면 LoginSlice의 login 함수를 실행해서 로그인이 유지되도록 함.
***
* 문제
  + 별도의 유저인증 라이브러리를 사용하지 않아서 로그인과정에 거쳐야 할 인증 로직이 없는 문제가 발생함.
* 해결
  + 유저가 로그인 요청을 하면 loginSlice에서 id와 비밀번호 형식을 검사하고, 통과하면 db의 자료와 같은지 확인하여 로그인 여부를 결정하도록 함.
***  
* 문제
  + 로그인 유저인증 과정에서 db에 저장된 유저들의 정보를 가져와야 하는데, 계속 빈 배열이 출력되는 문제가 발생함.
* 해결
  + 로그인 요청이 들어오면 Object.values 메서드를 사용하여 db의 자료들을 값으로 주어 자료들이 정상적으로 출력되게 함.
***  
* 문제
  + 동아리 가입신청, 웹사이트 회원가입 과정에서 너무 많은 state와 함수들이 생겨서 유지보수하기 어려운 상황이 발생함.
* 해결
  + useMember, useSignin 같은 커스텀훅을 만들어서 상태관리와 함수사용 및 입력형식 인증을 훅을 재사용하는 방식으로 최적화함.
***  
* 문제
  + 페이지를 하단까지 보고 헤더에서 메뉴이동을 하게되면 화면이 새로 바뀐 페이지의 하단에 머무르는 문제가 지속됨.
* 해결
  + useLocation 훅 및 scrollTo 함수에 대해 학습한 후 별도 컴포넌트를 만들어 경로가 바뀔 때마다 화면이 제일 상단으로 이동하도록 보완함.
***  
* 문제
  + 메인페이지의 환영문구에 background-clip: text; 속성-값을 사용하여 배경색을 입혔는데, 잘못된 속성이라는 오류가 발생함.
* 해결
  + -webkit-background-clip: text; 속성-값을 추가하여 글자에만 배경색이 입혀지도록 수정함.
***  
* 문제
  + 모바일 화면에서 좌우로 움직일 수 있는 스크롤바가 생기는 문제가 발생함.
* 해결
  + html과 body 태그에 overflow-x: hidden; 속성-값을 추가하고, index.html의 meta 데이터에 user-scalable = no를 추가해서 해결함.
***  
* 문제
  + 모바일, 태블릿 화면에서 유저가 input 요소를 누르면 자동으로 확대되어 시야를 방해하게 되는 문제가 발생함.
* 해결
  + index.html의 meta 데이터에서 maximum-scale = 1, minimum-scale = 1을 추가해서 해결함.
***  