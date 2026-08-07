import { useRouteError, Link } from 'react-router-dom';

export default function NotFound() {
  const error = useRouteError();

  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Page not found</p>
      <p>{error?.statusText || error?.message}</p>
      <Link to="/">Go Home</Link>
    </div>
  );
}