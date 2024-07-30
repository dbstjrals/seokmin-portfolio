import { useLanguage } from "../../app/context/language-context";
import { TEXT_CONSTANTS } from "../constants/text-constant";

const Translation = ({ id }: { id: string }) => {
  const { language } = useLanguage();
  return <>{TEXT_CONSTANTS[language][id]}</>;
};
export default Translation;
