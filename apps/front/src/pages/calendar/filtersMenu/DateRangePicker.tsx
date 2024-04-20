import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger
} from '@src/components/ui/shadcn/select';
import { Calendar } from '@src/components/ui/shadcn/calendar';
import { CalendarIcon } from 'lucide-react';
import { useTranslation } from '@src/services/i18n/useTranslation';
import { DayView } from '../calendar.models';
import { DateRange } from 'react-day-picker';
import { useCalendar } from '@src/services/store/calendar/calendar.store';
import { getCalendarRange } from '../calendar.utils';

interface IDateRangePickerProps {
  dayView: DayView;
}

export const DateRangePicker = ({ dayView }: IDateRangePickerProps) => {
  const { range, setRange } = useCalendar();

  const handleSelect = (maybeRange: DateRange | undefined) =>
    setRange({
      from: maybeRange?.from || range.from,
      to: maybeRange?.to || range.to
    });

  return (
    <>
      <Presets dayView={dayView} />
      <div className="rounded-md border mt-2">
        <Calendar
          disabled
          mode="range"
          selected={range}
          onSelect={handleSelect}
          defaultMonth={range.from}
        />
      </div>
    </>
  );
};

interface IPresetsProp {
  dayView: DayView;
}

const Presets = ({ dayView }: IPresetsProp) => {
  const t = useTranslation();
  const { rangeIndex, setRangeAndIndex } = useCalendar();

  const handleChange = (index: string) =>
    setRangeAndIndex(getCalendarRange(dayView, +index), index);

  return (
    <Select onValueChange={handleChange} value={rangeIndex}>
      <SelectTrigger>
        <div className="flex justify-start items-center text-left font-normal">
          <CalendarIcon className="mr-2 h-4 w-4" />
          {t(`calendar.dateRange.${dayView}.${rangeIndex}`)}
        </div>
      </SelectTrigger>
      <SelectContent position="popper">
        {['-1', '0', '1', '2', '3'].map((value) => (
          <SelectItem key={value} value={value}>
            {t(`calendar.dateRange.${dayView}.${value}`)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
