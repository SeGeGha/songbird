import React from 'react';

import './Tabs.scss';

interface TabsProps {
  tabsNames: Array<string>,
  activeTabId: number,
}

const Tabs: React.FC<TabsProps> = ({ tabsNames, activeTabId }) => (
  <div className="tabs">
    {tabsNames.map((tabName, id) => {
      const classList: string = (activeTabId === id) ? 'tabs__tab tab--actived' : 'tabs__tab';

      return (
        <button
          className={classList}
          type="button"
          key={tabName}
          data-id={id}
        >
          {tabName}
        </button>
      );
    })}
  </div>
);

export default Tabs;
