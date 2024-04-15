import FiltersMenu from '../../filtersMenu/FiltersMenu';
import { IDayView } from '../../calendar.models';

interface IDaysViewProps {
  dayView: IDayView;
}

const DaysView = ({ dayView }: IDaysViewProps) => {
  console.log('DaysView', dayView);

  return (
    <div id="daysView" className="h-full flex">
      <FiltersMenu dayView={dayView} />
      <div className="flex-1">calendar</div>
    </div>
  );
};

export default DaysView;
