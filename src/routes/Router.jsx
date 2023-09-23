import {
  Route,
  Navigate,
  NavLink,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import HomePage from 'pages/HomePage';
import UserPageLayout from 'pages/UserPage';

import { Layout } from '../components/Layout';
import { UserProfile } from '../components/UserProfile';
import { EditProfile } from '../components/EditProfile';
import { UserSettings } from '../components/UserSettings';

import { commonStyles } from 'styles';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path={'user'}
          element={<UserPageLayout />}
          handle={{
            crumb: () => (
              <NavLink to="/user" end style={commonStyles.activeLink}>
                User
              </NavLink>
            ),
          }}
        >
          <Route index element={<UserProfile />} />
          <Route
            path="edit-profile"
            element={<EditProfile />}
            handle={{
              crumb: () => (
                <NavLink
                  to="/user/edit-profile"
                  end
                  style={commonStyles.activeLink}
                >
                  Edit
                </NavLink>
              ),
            }}
          />
          <Route
            path="settings"
            handle={{
              crumb: () => (
                <NavLink
                  to="/user/settings"
                  end
                  style={commonStyles.activeLink}
                >
                  Settings
                </NavLink>
              ),
            }}
            element={<UserSettings />}
          />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </>
  ),
  {
    basename: '/test',
  }
);

export const Router = () => <RouterProvider router={router} />;
