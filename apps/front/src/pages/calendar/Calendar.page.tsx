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
import { SettingsPopupMenu } from '@src/components/settingsPopupMenu/SettingsPopupMenu';

const CalendarPage = () => {
  const t = useTranslation();

  const TabContent = ({ view }: { view: CalendarView }) => {
    switch (view) {
      case 'weekend':
        return <DaysView dayView="weekend" />;
      case 'week':
        return <DaysView dayView="week" />;
      case 'upcoming':
        return <UpcomingView />;
      default:
        return <p>no {view} view found</p>;
    }
  };

  return (
    <Page id="calendarPage">
      <Tabs
        id="tabs"
        className="flex h-full flex-col"
        defaultValue={DEFAULT_CALENDAR_VIEW}
      >
        <div id="tabsList" className="flex justify-between mb-4">
          <TabsList>
            {CALENDAR_VIEWS.map((view) => (
              <TabsTrigger key={view} value={view}>
                {t(`calendar.view.${view}`)}
              </TabsTrigger>
            ))}
          </TabsList>

          <SettingsPopupMenu />
        </div>

        {CALENDAR_VIEWS.map((view) => (
          <TabsContent key={view} value={view} className="flex-1">
            <TabContent view={view} />
          </TabsContent>
        ))}
      </Tabs>
    </Page>
  );
};

export default CalendarPage;
