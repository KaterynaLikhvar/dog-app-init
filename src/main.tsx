import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './services/store';
import './index.css';
import { DogAppThemeProvider } from './theme';
import {
  BreedListPage,
  BreedItemPage,
  VotePage,
  HistoryPage,
  UploadsPage,
  MainPage,
  FavoritesPage
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: '',
        element: <MainPage />
      },
      {
        path: 'breeds/:breedId',
        element: <BreedItemPage />
      },
      {
        path: 'breeds',
        element: <BreedListPage />
      },
      {
        path: 'votes',
        element: <VotePage />
      },
      {
        path: 'history',
        element: <HistoryPage />
      },
      {
        path: 'uploads',
        element: <UploadsPage />
      },
      {
        path: 'favorites',
        element: <FavoritesPage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <DogAppThemeProvider>
        <RouterProvider router={router} />
      </DogAppThemeProvider>
    </Provider>
  </React.StrictMode>
);
