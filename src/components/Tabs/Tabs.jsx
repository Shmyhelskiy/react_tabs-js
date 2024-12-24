import { Tab } from '../Tab/Tab';

export const Tabs = ({ tabs, onTabSelected, activeTabId }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <Tab
                tab={tab}
                key={tab.id}
                onTabSelected={onTabSelected}
                activeTabId={activeTabId || tabs[0]}
              />
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTabId.content}
      </div>
    </div>
  );
};
