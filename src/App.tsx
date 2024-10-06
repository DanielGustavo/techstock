import 'react-responsive-modal/styles.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import StockPage from './pages/StockPage';
import LandingPage from './pages/LandingPage';

const router = createBrowserRouter([
  { path: '/', Component: LandingPage },
  { path: '/stock', Component: StockPage },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
