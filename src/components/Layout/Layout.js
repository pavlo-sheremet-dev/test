import { Outlet } from 'react-router-dom';
import { NavLink } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <header className={'header'}>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/movies">Movies</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
