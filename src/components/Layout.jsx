import { NavLink, Outlet } from 'react-router-dom';
import { commonStyles } from 'styles';

export const Layout = () => {
  return (
    <>
      <header>
        <div>
          <nav>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                gap: 10,
                padding: 0,
              }}
            >
              <li>
                <NavLink to={'/'} style={commonStyles.activeLink}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={'/user'} style={commonStyles.activeLink}>
                  User
                </NavLink>
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
