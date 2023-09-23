import { BreadCrumbs } from 'components/BreadCrumbs';
import { NavLink, Outlet } from 'react-router-dom';
import { commonStyles } from 'styles';

const UserPage = () => {
  return (
    <div
      style={{
        display: 'grid',
        gap: 20,
        gridTemplateColumns: '150px 1fr',
      }}
    >
      <aside>
        <nav>
          <ul>
            <li>
              <NavLink to={'edit-profile'} style={commonStyles.activeLink}>
                Edit Profile
              </NavLink>
            </li>
            <li>
              <NavLink to={'settings'} style={commonStyles.activeLink}>
                User Settings
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <div>
        <BreadCrumbs />
        <Outlet />
      </div>
    </div>
  );
};

export default UserPage;
