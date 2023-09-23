import { NavLink, useMatches } from 'react-router-dom';
import { commonStyles } from 'styles';

export const BreadCrumbs = () => {
  const matches = useMatches();
  const crumbs = matches
    .filter(match => Boolean(match.handle?.crumb))
    .map(match => ({ id: match.id, crumb: match.handle.crumb() }));

  return (
    <ul style={styles.list}>
      <li style={styles.item}>
        <NavLink to={'/'} style={commonStyles.activeLink}>
          Home
        </NavLink>
        {!!crumbs.length && <span>/</span>}
      </li>
      {crumbs.map(({ id, crumb }, index) => (
        <li style={styles.item} key={id}>
          {crumb}
          {crumbs.length - 1 > index && <span>/</span>}
        </li>
      ))}
    </ul>
  );
};

const styles = {
  list: { display: 'flex', listStyle: 'none', padding: 0 },
  item: { paddingRight: 10, display: 'flex', gap: 10 },
};
