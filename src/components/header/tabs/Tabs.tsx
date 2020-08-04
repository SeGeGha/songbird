import React, { useState } from 'react';

import './Tabs.scss';

interface TabsProps {
  tabsNames: Array<string>,
}

const Tabs: React.FC<TabsProps> = ({ tabsNames }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabs">
      {tabsNames.map((tabName, id) => {
        const classList: string = (activeTab === id) ? 'tabs__tab tab--actived' : 'tabs__tab';

        return (
          <button
            className={classList}
            type="button"
            key={tabName}
            data-id={id}
            onClick={({ currentTarget }: React.SyntheticEvent<HTMLButtonElement>) => {
              setActiveTab(+currentTarget.dataset.id);
            }}
          >
            {tabName}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
