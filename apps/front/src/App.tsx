import './index.css';
import '@services/i18n/i18n.config';

import { router } from '@services/router/index.router';
import { RouterProvider } from '@tanstack/react-router';

const App = () => <RouterProvider router={router} />;

export default App;
