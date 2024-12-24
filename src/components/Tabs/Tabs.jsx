import { Tab } from '../Tab/Tab';

export const Tabs = ({ tabs, findActive, active }) => {
  const activeTab = tabs.find(tab => tab.id === active.id);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <Tab
                tab={tab}
                key={tab.id}
                findActive={findActive}
                active={activeTab || tabs[0]}
              />
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {active.content}
      </div>
    </div>
  );
};
