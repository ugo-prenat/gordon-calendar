import Page from '@components/Page';
import FiltersMenu from './filtersMenu/FiltersMenu';

const CalendarPage = () => {
  return (
    <Page title="Calendar" className="bg-blue-200">
      <div className="flex">
        <FiltersMenu />
        <div className="bg-green-100">calendar</div>
      </div>
    </Page>
  );
};

export default CalendarPage;
