import Translation from "../../../shared/components/Translation";
import * as S from "../about-me-section.styled";
import { Items as EducationItem } from "./Items";

export default function Education() {
  return (
    <S.Education>
      <h3>Education</h3>
      <S.Items>
        {educationItems.map(({ id, name, major, period }) => (
          <EducationItem key={id} name={name} subName={major} period={period} />
        ))}
      </S.Items>
    </S.Education>
  );
}

const educationItems = [
  {
    id: "university",
    name: <Translation id='university' />,
    major: <Translation id='major' />,
    period: <Translation id='universityPeriod' />,
  },
  {
    id: "highschool",
    name: <Translation id='highschool' />,
    period: <Translation id='highschoolPeriod' />,
  },
];
