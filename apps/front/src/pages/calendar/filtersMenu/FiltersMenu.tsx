import { DayView } from '../calendar.models';
import { DateRangePicker } from './DateRangePicker';

interface IFiltersMenuProps {
  dayView: DayView;
}

const FiltersMenu = ({ dayView }: IFiltersMenuProps) => {
  return (
    <div className="border-r pr-4 mr-4">
      <DateRangePicker dayView={dayView} />
    </div>
  );
};

export default FiltersMenu;
