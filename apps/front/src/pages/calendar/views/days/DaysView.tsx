import { WEEK_CALENDAR_VIEW, WEEKEND_CALENDAR_VIEW } from '@src/constants';
import FiltersMenu from '../../filtersMenu/FiltersMenu';

interface IDaysViewProps {
  view: typeof WEEK_CALENDAR_VIEW | typeof WEEKEND_CALENDAR_VIEW;
}

const DaysView = ({ view }: IDaysViewProps) => {
  console.log('DaysView', view);

  return (
    <div className="h-full flex">
      <FiltersMenu />
      <div className="flex-1">calendar</div>
    </div>
  );
};

export default DaysView;
