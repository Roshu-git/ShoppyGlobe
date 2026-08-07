import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import App from '../App';

const Home = lazy(() => import('../pages/Home'));
const ProductDetail = lazy(() => import('../pages/ProductDetail'));
const Cart = lazy(() => import('../pages/Cart'));
const Checkout = lazy(() => import('../pages/Checkout'));
const NotFound = lazy(() => import('../pages/NotFound'));

const withSuspense = (Component) => (
  <Suspense fallback={<p>Loading page...</p>}>
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: withSuspense(NotFound),
    children: [
      { index: true, element: withSuspense(Home) },
      { path: 'product/:id', element: withSuspense(ProductDetail) },
      { path: 'cart', element: withSuspense(Cart) },
      { path: 'checkout', element: withSuspense(Checkout) },
    ],
  },
]);
