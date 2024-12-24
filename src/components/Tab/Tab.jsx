export const Tab = ({ tab, findActive, active }) => {
  return (
    <li data-cy="Tab" className={tab.id === active.id ? 'is-active' : ''}>
      <a href={`#${tab.id}`} data-cy="TabLink" onClick={() => findActive(tab)}>
        {tab.title}
      </a>
    </li>
  );
};
