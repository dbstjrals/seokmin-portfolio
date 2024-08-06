import { useLanguage } from "../../app/context/language-context";
import { TEXT_CONSTANTS } from "../constants/text-constant";

export type TranslationReturnType = JSX.Element;

export default function Translation({ id }: { id: string }) {
  const { language } = useLanguage();
  return <>{TEXT_CONSTANTS[id][language]}</>;
}
