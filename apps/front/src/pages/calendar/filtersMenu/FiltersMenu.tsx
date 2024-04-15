import { IDayView } from '../calendar.models';
import { DateRangePicker } from './DateRangePicker';

interface IFiltersMenuProps {
  dayView: IDayView;
}

const FiltersMenu = ({ dayView }: IFiltersMenuProps) => {
  return (
    <div className="border-r pr-4 mr-4">
      <DateRangePicker dayView={dayView} />
    </div>
  );
};

export default FiltersMenu;
