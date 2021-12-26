import URL from "../../constants/URL";

// ACTION TYPE
const MOVE_PAGE = "work/MOVE_PAGE";

// ACTION CREATOR
export function movePage(page) {
  return { type: MOVE_PAGE, page };
}

// REDUCER
const initState = {
  works: [
    {
      cover: {
        image: "/images/ricoh-cover.png",
        subImage: "/images/ricoh-cover-sub.png",
        alt: "Ricoh Chatbot Service",
        url: `${URL.RICOH_PROMO_SITE}`,
      },
      contents: [
        {
          title: "Overview",
          items: [
            "기간: 2018.02 - 2021.03.",
            "해당 봇을 추가한 사이트의 방문자에게 자동 응답 서비스를 제공하는 챗봇 서비스.",
            "서비스 프로토타입 단계부터 3년동안 version 4.x.x까지 참여.",
            "챗봇 어드민의 프론트엔드 작업부터 시작해서 챗봇과 어드민 모두 프론트엔드와 백엔드로 작업 영역 확장.",
          ],
        },
        {
          title: "Characteristics of the Team",
          items: [
            "개발 팀 8명으로 구성.",
            "애자일 개발 방식으로 진행.",
            "Azure Devops와 Cloud Service를 이용해서 태스크와 코드 리뷰, 문서 관리, 배포 등을 진행.",
            "Microsoft Teams로 업무 커뮤니케이션 진행.",
            "코로나19 사태 이후 재택 근무 형태로 진행.",
            "Visual Studio와 Visual Studio Code를 개발 툴로 사용.",
          ],
        },
        {
          title: "Skills",
          items: [
            "HTML5",
            "CSS3 / SCSS",
            "JavaScript (ES6)",
            "TypeScript",
            "React",
            "Redux / Redux-Saga",
            "Axios",
            "TestCafe",
            "C# (.NET)",
            "Cosmos DB (No SQL)",
            "Azure SQL DB",
            "Azure Blob Storage",
          ],
        },
        {
          title: "Roles in Chat Bot Application",
          items: [
            "자동 완성 검색어 제공 기능 구현.\n(Azure Bot Framework 프론트 엔드 제공 파일의 튜닝)",
            "커스텀 시나리오와 기타 시나리오 처리 구현과 개선.",
            "MS TEAMS, NAVER LINE 커뮤니케이션 툴에서의 동작 개선.",
            "NAVER LINEWORKS  커뮤니케이션 툴에서의 동작 구현.",
            "챗봇에서 제공하는 파일의 NOT FOUND 기능 구현.",
            "Azure Bot Framework Back-end 레거시 버전 v3(.NET Framework)에서 v4(.NET Core)로 버전 업 대응.",
          ],
        },
        {
          title: "Roles in Chat Bot Admin Application",
          items: [
            "과거 채팅 이력 관리 기능 구현과 개선.",
            "시나리오 관리 기능 구현과 개선.",
            "챗봇 레이아웃 관리 기능 구현과 개선.",
            "실시간 채팅 목록 화면 구현과 개선.",
            "관리자와의 채팅 화면 구현과 개선.",
            "계약 플랜에 따른 제공 기능의 활성화/비활성화 구현.",
            "어드민 유저 관리 기능의 프론트엔드 영역 구현.",
            "어드민 조작 로그 출력 기능의 프론트엔드 영역 구현.",
            "어드민 로그인 허용 IP 설정 기능의 프론트엔드 영역 구현.",
            "챗봇 데모 기능의 프론트엔드 영역 구현.",
            "대시보드 기능의 백엔드 영역 구현.",
            "Testcafe를 이용한 E2E 테스트케이스 추가.",
          ],
        },
        {
          title: "Review",
          items: [
            "프론트엔드 지식이 전무한 상태에서 React를 이용해 애플리케이션을 구현하고 개선할 수 있는 단계까지 발전할 수 있었다.",
            "애자일 개발 방식과 배포, 그리고 클라우드 서비스에서의 DNS 설정, IP차단, CORS 허용 설정 등과 같은 구현외의 네트워크 관련 정보들도 접할 수 있었다.",
            "다른 무엇보다도 감사한 점은, 좋은 팀원들과 함께 할 수 있었던 점과 롤모델로 삼을 수 있었던 분을 만난 점이다. \nRICOH 챗봇 개발 팀과 함께 할 수 있었기에, 팀원으로서의 올바른 자세를 배울 수 있었고, 앞으로 되고자 하는 개발자의 모습을 그려낼 수 있었다.",
          ],
        },
      ],
    },
    {
      cover: {
        image: "/images/job-search.png",
        subImage: "/images/job-search.png",
        alt: "I'm looking for a company to work with me",
        text: "I'm looking for a company to work with me",
      },
      contents: [],
    },
  ],
  page: 1,
};
function reducer(prevState = initState, action) {
  switch (action.type) {
    case MOVE_PAGE: {
      const newState = { ...prevState };

      const worksCnt = newState.works.length;
      let nextPage = action.page;
      if (action.page > worksCnt) {
        nextPage = 1;
      }
      if (action.page < 1) {
        nextPage = worksCnt;
      }
      newState.page = nextPage;

      return newState;
    }
    default:
  }
  return prevState;
}

export default reducer;
