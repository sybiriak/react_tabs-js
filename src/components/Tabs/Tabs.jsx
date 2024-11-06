import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const tabChangeHandler = tabId => {
    if (tabId === activeTabId) {
      return;
    }

    onTabSelected(tabId);
  };

  let activeId = activeTabId;

  if (tabs.findIndex(tab => tab.id === activeTabId) === -1) {
    activeId = tabs[0].id;
  }

  const tabContent =
    tabs.find(tab => tab.id === activeId)?.content ?? tabs[0].content;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({ 'is-active': tab.id === activeId })}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => tabChangeHandler(tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabContent}
      </div>
    </div>
  );
};
