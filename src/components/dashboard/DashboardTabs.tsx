import React from 'react';
import { classNames } from '../../utils/tailwind';

interface DashboardTabsProps {
  activeTab: number;
  setActiveTab: (activeIndex: number) => void;
}

const DashboardTabs = ({ activeTab, setActiveTab }: DashboardTabsProps) => {
  const tabs = [
    { name: 'All Funds', onclick: () => setActiveTab(0) },
    { name: 'My Funds', onclick: () => setActiveTab(1) },
  ];

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto pt-6 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-baseline">
          <h3 className="text-lg leading-6 font-medium text-gray-900">View Funds</h3>
          <div className="mt-4 sm:mt-0 sm:ml-10">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab, index) => (
                <a
                  key={tab.name}
                  onClick={tab.onclick}
                  className={classNames(
                    activeTab === index
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                    'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm',
                  )}
                  aria-current={activeTab === index ? 'page' : undefined}
                >
                  {tab.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardTabs;
