import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger
} from '@src/components/ui/shadcn/select';
import { addDays, format } from 'date-fns';
import { useState } from 'react';
import { Calendar } from '@src/components/ui/shadcn/calendar';
import { DateRange } from 'react-day-picker';
import { CalendarIcon } from 'lucide-react';
import { useTranslation } from '@src/services/i18n/useTranslation';
import { IDayView } from '../calendar.models';
import { NB_OF_DAYS_BY_VIEWS } from '@src/constants';

interface IDateRangePickerProps {
  dayView: IDayView;
}

export const DateRangePicker = ({ dayView }: IDateRangePickerProps) => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 3)
  });

  return (
    <>
      <Presets date={date} setDate={setDate} dayView={dayView} />
      <div className="rounded-md border mt-2">
        <Calendar
          disabled
          mode="range"
          selected={date}
          onSelect={setDate}
          defaultMonth={date?.from}
        />
      </div>
    </>
  );
};

interface IPresetsProp {
  dayView: IDayView;
  date: DateRange | undefined;
  setDate: (date: DateRange | undefined) => void;
}

const Presets = ({ date, setDate, dayView }: IPresetsProp) => {
  const t = useTranslation();
  const nbOfDays = NB_OF_DAYS_BY_VIEWS[dayView];

  const handleChange = (value: string) => {
    setDate({
      from: addDays(new Date(), parseInt(value)),
      to: addDays(new Date(), parseInt(value) + nbOfDays)
    });
  };

  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger>
        <div className="flex justify-start items-center text-left font-normal">
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date?.from ? (
            date.to ? (
              <>
                {format(date.from, 'LLL dd, y')} -{' '}
                {format(date.to, 'LLL dd, y')}
              </>
            ) : (
              format(date.from, 'LLL dd, y')
            )
          ) : (
            <span>Pick a date</span>
          )}
        </div>
      </SelectTrigger>
      <SelectContent position="popper">
        {['-1', '0', '1', '3'].map((value) => (
          <SelectItem key={value} value={value}>
            {t(`calendar.dateRange.${value}`)}
          </SelectItem>
        ))}
        <SelectItem value="0">Today</SelectItem>
        <SelectItem value="1">Tomorrow</SelectItem>
        <SelectItem value="3">In 3 days</SelectItem>
        <SelectItem value="7">In a week</SelectItem>
      </SelectContent>
    </Select>
  );
};
