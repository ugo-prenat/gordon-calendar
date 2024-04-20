import FiltersMenu from '../../filtersMenu/FiltersMenu';
import { DayView } from '../../calendar.models';
import { useCalendar } from '@src/services/store/calendar/calendar.store';
import { useFnsFormat } from '@src/hooks/useFnsFormat';

interface IDaysViewProps {
  dayView: DayView;
}

const DaysView = ({ dayView }: IDaysViewProps) => {
  const { range } = useCalendar();
  const format = useFnsFormat();

  console.log({ from: format(range.from, 'PPP'), to: format(range.to, 'PPP') });

  return (
    <div id="daysView" className="h-full flex">
      <FiltersMenu dayView={dayView} />
      <div className="flex-1">calendar</div>
    </div>
  );
};

export default DaysView;
