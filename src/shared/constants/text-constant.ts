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
  en: {
    languageToggle: "한글로 보기 🇰🇷",
    profileMainDescription: `${NAME.EN}\nFront-End Developer Portfolio`,
    profileSubDescription:
      "Hello. I'm Developer Yoon.\nLove realizing good-hearted value through SW.",
    start: "Get Started ↓",
  },
  ko: {
    languageToggle: "View in English 🇺🇸",
    profileMainDescription: `${NAME.KO}\n프론트엔드 개발자 포트폴리오`,
    profileSubDescription: `만나뵙게 되어 반갑습니다.\n선한 가치를 구현하는 개발자, ${NAME.KO}입니다.`,
    start: "시작하기 ↓",
  },
};
