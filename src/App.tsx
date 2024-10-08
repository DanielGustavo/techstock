import 'react-responsive-modal/styles.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import StockPage from './pages/StockPage';
import LandingPage from './pages/LandingPage';
import ProductPage from './pages/ProductPage';

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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
