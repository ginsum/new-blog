export const introduction = {
    title: "프론트엔드 엔지니어 정혜경입니다.",
    description: "3년차 프론트엔드 엔지니어입니다. 협업으로 프로젝트를 완성시켜나가는 일을 좋아합니다. 사용자가 사용하는데 편리하고 합리적인 화면을 만드는 것이 좋습니다."
}

export const contact = [
    {label: "연락처", text: "010-0000-0000"},
    {label: "이메일", text: "immime12697@gmail.com"},
]

export const experience = {
    company: "(주)데이터뱅크",
    date: "2020.05 ~ 현재",
    description: "영어교육사이트 / 프론트엔드 엔지니어",
    detail : [
        { 
            title: "영어교육사이트 testglider.com 개발 및 유지보수", 
            content: [
                "[개요] 영어시험 학습 플랫폼으로 글로벌한 유저들이 사용하고 있습니다. 모의시험, 연습 문제, 해설, 학습 기록 등을 제공하여 유저들이 효율적으로 영어 공부할 수 있는 서비스",
                "[기술] Typescript, Next.js, Redux, Redux-toolkit, tailwindcss, styled-components",
                "- 시험 응시, 시험 결과, 해설 페이지 등 UI 제작 및 기능 개발",
                "- Analysis 페이지 (유저 시험 기록 그래프) 개발",
                "- 가격 정보 및 결제 페이지 유지보수",
                "- 모바일/ 태블릿 반응형 대응",
                "- 기존 기능 에러 수정 및 리팩토링 작업"
            ]

        },
        { 
            title: "어드민 사이트 개발 및 유지보수", 
            content: [
                "[개요] content developer 들이 시험 및 해설 contents 를 등록, 수정, 삭제하고, 유저들의 답안을 채점 및 확인, 유저 정보를 확인 할 수 있는 등 관리할 수 있는 사이트.",
                "[기술] Typescript, React, coreui, react-query, recoil",
                "- Typescript로 전환 시 기본 세팅 작업",
                "- 시험 콘텐츠 목록 및 상세 UI 제작 및 기능 추가",
                "- 환불 기능 추가"
            ]
        },
        { 
            title: "첨석 게시판 연동", 
            content: [
                "[개요] 영어 학습 유저들의 커뮤니티 게시판",
                "[기술] Typescript, Next.js",
                " - peerboard.com의 게시판 서비스를 deep intergration로 연동하여 프로덕트 내에서 게시판을 사용할 수 있게 작업",
                " - 네브바 연결 작업"
            ]
        },
        { 
            title: "STT 테스팅 데모 사이트 개발", 
            content: [
                "[개요] Speach to Text 기능을 확인해볼수 있는 사이트, 음성을 녹음하거나 음원을 업로드해 stt 결과를 확인할 수 있는 페이지",
                "[기술] Typescript, React, tailwindcss",
                "- 기본 환경 세팅",
                "- 음성 레코딩 기능 및 파일 업로드 UI 제작 및 기능 추가"
            ]
        },
    ]
}
