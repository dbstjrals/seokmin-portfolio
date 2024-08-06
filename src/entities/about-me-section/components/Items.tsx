import { TranslationReturnType } from "../../../shared/components/Translation";

interface ItemsProps {
  name: TranslationReturnType;
  subName?: TranslationReturnType;
  period: TranslationReturnType;
}

export function Items({ name, subName, period }: ItemsProps) {
  return (
    <div>
      <h4>{name}</h4>
      {subName && <p>{subName}</p>}
      <p>{period}</p>
    </div>
  );
}
