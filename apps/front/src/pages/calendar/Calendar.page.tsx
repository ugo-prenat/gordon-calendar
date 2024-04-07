import Page from '@components/Page';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@components/ui/shadcn/tabs';
import { CALENDAR_VIEWS, DEFAULT_CALENDAR_VIEW } from '@src/constants';
import DaysView from './views/days/DaysView';
import UpcomingView from './views/upcoming/UpcomingView';
import { CalendarView } from './calendar.models';

const CalendarPage = () => {
  const TabContent = ({ view }: { view: CalendarView }) => {
    switch (view) {
      case 'weekend':
        return <DaysView view="weekend" />;
      case 'week':
        return <DaysView view="week" />;
      case 'upcoming':
        return <UpcomingView />;
      default:
        return <p>no {view} view found</p>;
    }
  };

  return (
    <Page className="bg-blue-200">
      <Tabs defaultValue={DEFAULT_CALENDAR_VIEW}>
        <TabsList>
          {CALENDAR_VIEWS.map((view) => (
            <TabsTrigger key={view} value={view}>
              {view}
            </TabsTrigger>
          ))}
        </TabsList>

        {CALENDAR_VIEWS.map((view) => (
          <TabsContent key={view} value={view}>
            <TabContent view={view} />
          </TabsContent>
        ))}
      </Tabs>
    </Page>
  );
};

export default CalendarPage;
