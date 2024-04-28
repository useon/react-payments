import { createBrowserRouter } from 'react-router-dom';
import NewCardPage from './pages/newCard/NewCardPage';
import CardRegistrationCompletePage from './pages/cardRegistrationComplete/CardRegistrationCompletePage';
import App from './App';
import NotFoundPage from './pages/notFound/NotFoundPage';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <NotFoundPage />,
      children: [
        {
          index: true,
          element: <NewCardPage />,
        },
        {
          path: 'registration-complete',
          element: <CardRegistrationCompletePage />,
        },
      ],
    },
  ],
  { basename: '/react-payments/' },
);

export default router;
