import Translation from "../../../shared/components/Translation";
import * as S from "../about-me-section.styled";
import { Items as CertificateItem } from "./Items";

export default function Certificate() {
  return (
    <S.Certificate>
      <h3>Certificate</h3>
      <S.Items>
        {certificateItems.map(({ id, name, level, period }) => (
          <CertificateItem
            key={id}
            name={name}
            subName={level}
            period={period}
          />
        ))}
      </S.Items>
    </S.Certificate>
  );
}

const certificateItems = [
  {
    id: "toeic-speaking",
    name: <>TOEIC Speaking</>,
    level: <>Advanced Low</>,
    period: <Translation id='toeicSpeakingPeriod' />,
  },
];
