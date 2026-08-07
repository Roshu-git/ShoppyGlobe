import { useRouteError, Link } from 'react-router-dom';
import Header from '../component/Header';

export default function NotFound() {
  const error = useRouteError();

  return (
    <>
    <Header />
    <div className="not-found">
      <h2>404</h2>
      <h3>Page not found</h3>
      <p>{error?.statusText || error?.message}</p>
      <Link to="/" className='back-btn'>Go Home</Link>
    </div>
    </>
  );
}