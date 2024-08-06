interface TextConstantsType {
  [key: string]: {
    [key: string]: string;
  };
}

const NAME = {
  EN: "Yoon Seokmin",
  KO: "윤석민",
};

export const TEXT_CONSTANTS: TextConstantsType = {
  languageToggle: {
    en: "한글로 보기 🇰🇷",
    ko: "View in English 🇺🇸",
  },
  name: {
    en: `${NAME.EN}`,
    ko: `${NAME.KO}`,
  },
  profileTitle: {
    en: `Front-End Developer Portfolio`,
    ko: `프론트엔드 개발자 포트폴리오`,
  },
  welcomeMessage: {
    en: "Hello. I'm Developer Yoon.\nLove realizing good-hearted value through SW.",
    ko: `만나뵙게 되어 반갑습니다.\n선한 가치를 구현하는 개발자, ${NAME.KO}입니다.`,
  },
  start: {
    en: "Get Started ↓",
    ko: "시작하기 ↓",
  },
  birthDate: {
    en: "July 13th, 1998",
    ko: "1998.07.13",
  },
  phoneNumber: {
    en: "001+82 10-8695-0863",
    ko: "010-8695-0863",
  },
  address: {
    en: "Dongjak-gu, Seoul, Korea",
    ko: "서울특별시 동작구",
  },
  university: {
    en: "Soongsil University (Seoul, Korea)",
    ko: "숭실대학교",
  },
  major: {
    en: "Software",
    ko: "소프트웨어학부",
  },
  universityPeriod: {
    en: "Mar 2018 - Feb 2025 (Expected)",
    ko: "2018.03 - 2025.02 (졸업 예정)",
  },
  highschool: {
    en: "Haeundae High School (Busan, Korea)",
    ko: "해운대고등학교",
  },
  highschoolPeriod: {
    en: "Mar 2014 - Feb 2017",
    ko: "2014.03 - 2017.02",
  },
  toeicSpeakingPeriod: {
    en: "July 27th, 2024",
    ko: "2024.07.27",
  },
  swFestivalName: {
    ko: "SW인재페스티벌 우수작품 경진대회",
    en: "SW Innovation Festival Best Work Award",
  },
  swFestivalAwards: {
    ko: "후원기업상 (한국마이크로소프트)",
    en: "Sponsorship Award (Korea MicroSoft)",
  },
  swFestivalDate: {
    ko: "2023.11",
    en: "Nov 2023",
  },
  ssuSwCompetitionName: {
    ko: "숭실대학교 소프트웨어 공모전",
    en: "Soongsil University Software Competition",
  },
  ssuSwCompetitionAwards: {
    ko: "학장상",
    en: "Dean's Award",
  },
  ssuSwCompetitionDate: {
    ko: "2023.09",
    en: "Sep 2023",
  },
  koITName: {
    ko: "한국IT정책경영학회 주관 학술대회",
    en: "Korean IT Policy Management Association Conference",
  },
  koITAwards: {
    ko: "대상",
    en: "Grand Award",
  },
  koITDate: {
    ko: "2018.09",
    en: "Sep 2018",
  },
  language: {
    ko: "언어",
    en: "Language",
  },
  frontEnd: {
    ko: "프론트엔드",
    en: "Front-End",
  },
  styling: {
    ko: "스타일링",
    en: "Styling",
  },
  test: {
    ko: "코드 테스트",
    en: "Test",
  },
  versionControl: {
    ko: "형상 관리",
    en: "Version Control",
  },
  deployment: {
    ko: "배포",
    en: "Deployment",
  },
  communication: {
    ko: "협업 툴",
    en: "Communication",
  },
  multilingual: {
    ko: "",
    en: "Multilingual Skills",
  },
  multilingualItems: {
    ko: "",
    en: "Korean(native), English(Advanced Low)",
  },
};
