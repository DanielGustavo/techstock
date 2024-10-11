import 'react-responsive-modal/styles.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import StockPage from './pages/StockPage';
import LandingPage from './pages/LandingPage';
import ProductPage from './pages/ProductPage';
import SalesPage from './pages/SalesPage';
import SalePage from './pages/SalePage';

const router = createBrowserRouter([
  { path: '/', Component: LandingPage },
  { path: '/stock', Component: StockPage },
  { path: '/product', Component: ProductPage },
  {
    path: '/product/:productId',
    Component: ProductPage,
    loader: (params) => {
      return {
        productId: params.params.productId
          ? params.params.productId
          : undefined,
      };
    },
  },
  { path: '/sales', Component: SalesPage },
  { path: '/sale', Component: SalePage },
  {
    path: '/sale/:saleId',
    Component: SalePage,
    loader: (params) => {
      return {
        saleId: params.params.saleId ? params.params.saleId : undefined,
      };
    },
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
