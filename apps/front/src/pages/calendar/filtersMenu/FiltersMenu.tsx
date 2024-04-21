import { DayView } from '../calendar.models';
import { ChampionshipsFilter } from './ChampionshipsFilter';
import { DateRangePicker } from './DateRangePicker';

interface IFiltersMenuProps {
  dayView: DayView;
}

const FiltersMenu = ({ dayView }: IFiltersMenuProps) => {
  return (
    <div className="border-r pr-4 mr-4">
      <DateRangePicker dayView={dayView} />
      <ChampionshipsFilter />
    </div>
  );
};

export default FiltersMenu;
