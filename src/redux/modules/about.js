// REDUCER
const initState = {
  aboutContent: `꾸준한 성장을 모토로\n새로운 도전을 두려워하지 않고 배움을 멈추지 않습니다.\n\n2018년 풀스택 개발자로 시작해서\n2021년 현재 프론트엔드 개발자로서 나아가고자 합니다.\n\n3년간 일본에서 풀스택 개발자로서의 경험에서 배운\n개발 지식과 책임감, 그리고 협력을 기반으로 삼아 웹 애플리케이션을 개발합니다.`,
  educations: [
    {
      text: "2016-2017. SC IT MASTER 32nd",
      tooltips: [
        {
          text: "한국 무역 협회에서 진행한\n일본 취업 웹/앱 개발자 양성 교육 과정",
        },
        { text: "JAVA, SQL, 일본어 학습" },
        {
          link: "https://www.youtube.com/embed/d6qAujuIA2Q",
          text: "팀 프로젝트 경험",
        },
      ],
    },
    { text: "의공학 학사 - 연세대학교\n원주캠퍼스" },
  ],
  certificates: [{ text: "2021. 정보처리기사" }],
};
function reducer(prevState = initState, action) {
  switch (action.type) {
    default:
  }
  return prevState;
}

export default reducer;
