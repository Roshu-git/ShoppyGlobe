import { Outlet } from 'react-router-dom';
import Header from './component/Header';

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Outlet />
      </main>
    </>
  );
}