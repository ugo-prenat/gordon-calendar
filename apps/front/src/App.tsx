import './index.css';
import '@services/i18n/i18n.config';

import { router } from '@services/router/index.router';
import { RouterProvider } from '@tanstack/react-router';
import { useEffect } from 'react';
import { updateRootElement } from './services/store/settings/settings.utils';
import { useSettings } from './services/store/settings/settings.store';

const App = () => {
  const { theme } = useSettings();

  useEffect(() => {
    updateRootElement(theme);
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
