import * as S from "../about-me-section.styled";
import Translation from "../../../shared/components/Translation";
import { Items as PrizeItems } from "./Items";

export default function Prize() {
  return (
    <S.Prize>
      <h3>Prize</h3>
      <S.Items>
        {prizeItems.map(({ id, name, awards, date }) => (
          <PrizeItems key={id} name={name} subName={awards} period={date} />
        ))}
      </S.Items>
    </S.Prize>
  );
}

const prizeItems = [
  {
    id: "swFestival",
    name: <Translation id='swFestivalName' />,
    awards: <Translation id='swFestivalAwards' />,
    date: <Translation id='swFestivalDate' />,
  },
  {
    id: "ssuSwCompetition",
    name: <Translation id='ssuSwCompetitionName' />,
    awards: <Translation id='ssuSwCompetitionAwards' />,
    date: <Translation id='ssuSwCompetitionDate' />,
  },
  {
    id: "koIT",
    name: <Translation id='koITName' />,
    awards: <Translation id='koITAwards' />,
    date: <Translation id='koITDate' />,
  },
];
