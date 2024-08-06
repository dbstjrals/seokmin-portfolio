import * as S from "../about-me-section.styled";
import address from "../../../shared/assets/icons/address.svg";
import birthDate from "../../../shared/assets/icons/birth-date.svg";
import email from "../../../shared/assets/icons/email.svg";
import name from "../../../shared/assets/icons/name.svg";
import phoneNumber from "../../../shared/assets/icons/phone-number.svg";
import Translation, {
  TranslationReturnType,
} from "../../../shared/components/Translation";

export default function Information() {
  const infoItems = [
    { id: "name", icon: name, text: <Translation id='name' /> },
    { id: "birthDate", icon: birthDate, text: <Translation id='birthDate' /> },
    {
      id: "phoneNumber",
      icon: phoneNumber,
      text: <Translation id='phoneNumber' />,
    },
    { id: "email", icon: email, text: <>dbstjrals1998@gmail.com</> },
    { id: "address", icon: address, text: <Translation id='address' /> },
  ];

  return (
    <S.Information>
      <h3>Information</h3>
      {infoItems.map(({ id, icon, text }) => (
        <InformationItems key={id} icon={icon} text={text} />
      ))}
    </S.Information>
  );
}

interface InfoItemProps {
  icon: string;
  text: TranslationReturnType;
}

function InformationItems({ icon, text }: InfoItemProps) {
  return (
    <S.InformationItems>
      <img src={icon} alt='' />
      {text}
    </S.InformationItems>
  );
}
