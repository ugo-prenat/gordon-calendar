import { CHAMPIONSHIPS } from '@repo/constants';
import { Championship } from '@repo/models';
import { Checkbox } from '@src/components/ui/shadcn/ui/checkbox';
import { useTranslation } from '@src/services/i18n/useTranslation';
import { useCalendar } from '@src/services/store/calendar/calendar.store';

export const ChampionshipsFilter = () => {
  const { championships, setChampionships } = useCalendar();

  const handleChange = (championship: Championship) => (checked: boolean) =>
    setChampionships(
      checked
        ? [...championships, championship]
        : championships.filter((c) => c !== championship)
    );

  return (
    <div id="championshipsFilter" className="flex flex-col gap-y-4 mt-6">
      {CHAMPIONSHIPS.map((championship) => (
        <CheckboxItem
          key={championship}
          championship={championship}
          onChange={handleChange(championship)}
          isChecked={championships.includes(championship)}
        />
      ))}
    </div>
  );
};

interface ICheckboxItemProps {
  championship: string;
  isChecked: boolean;
  onChange: (checked: boolean) => void;
}

const CheckboxItem = ({
  championship,
  isChecked,
  onChange
}: ICheckboxItemProps) => {
  const t = useTranslation();

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={championship}
        checked={isChecked}
        onCheckedChange={onChange}
      />
      <label htmlFor={championship}>{t(`championships.${championship}`)}</label>
    </div>
  );
};
