import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger
} from '@src/components/ui/shadcn/select';
import { useState } from 'react';
import { Calendar } from '@src/components/ui/shadcn/calendar';
import { CalendarIcon } from 'lucide-react';
import { useTranslation } from '@src/services/i18n/useTranslation';
import { IDateRange, IDayView } from '../calendar.models';
import { getCalendarRange } from '../calendar.utils';
import { DateRange } from 'react-day-picker';

interface IDateRangePickerProps {
  dayView: IDayView;
}

export const DateRangePicker = ({ dayView }: IDateRangePickerProps) => {
  const [range, setRange] = useState<IDateRange>(getCalendarRange(dayView, 0));

  const handleSelect = (maybeRange: DateRange | undefined) =>
    setRange({
      from: maybeRange?.from || range.from,
      to: maybeRange?.to || range.to
    });

  return (
    <>
      <Presets setRange={setRange} dayView={dayView} />
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
  dayView: IDayView;
  setRange: (date: IDateRange) => void;
}

const Presets = ({ setRange, dayView }: IPresetsProp) => {
  const t = useTranslation();
  const [selectedRangeIndex, setSelectedRangeIndex] = useState('0');

  const handleChange = (index: string) => {
    setSelectedRangeIndex(index);
    setRange(getCalendarRange(dayView, +index));
  };

  return (
    <Select onValueChange={handleChange} value={selectedRangeIndex}>
      <SelectTrigger>
        <div className="flex justify-start items-center text-left font-normal">
          <CalendarIcon className="mr-2 h-4 w-4" />
          {t(`calendar.dateRange.${dayView}.${selectedRangeIndex}`)}
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
