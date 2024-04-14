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
import { useTranslation } from '@src/services/i18n/useTranslation';

const CalendarPage = () => {
  const t = useTranslation();

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
    <Page>
      <Tabs defaultValue={DEFAULT_CALENDAR_VIEW}>
        <TabsList>
          {CALENDAR_VIEWS.map((view) => (
            <TabsTrigger key={view} value={view}>
              {t(`calendar.view.${view}`)}
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
