import React from 'react';

const Tabs = ({ tabs, activeTab, onChangeTab }) => {
  return (
    <div className="flex flex-col lg:flex-row w-full mx-auto gap-4 lg:gap-6 overflow-hidden">
      {/* Sidebar Navigation */}
      <div className="w-full lg:w-64 flex-shrink-0">
        <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible bg-gray-50 rounded-lg border border-gray-200">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`py-3 px-4 text-left text-sm lg:text-base font-medium cursor-pointer focus:outline-none transition-all duration-200 whitespace-nowrap lg:whitespace-normal border-b-2 lg:border-b-0 lg:border-l-4 border-transparent hover:bg-gray-100 ${
                activeTab === index + 1 
                  ? 'text-blue-600 border-b-blue-500 lg:border-b-0 lg:border-l-blue-500 bg-white lg:bg-blue-50' 
                  : 'text-gray-700'
              }`}
              aria-selected={activeTab === index + 1}
              aria-controls={`tabpanel-${index}`}
              onClick={() => onChangeTab(index + 1)}
              role="tab"
              tabIndex={activeTab === index + 1 ? 0 : -1}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>
      
      {/* Content Area */}
      <div className="flex-1 min-w-0 overflow-hidden">
        <div className="bg-white rounded-lg border border-gray-200 h-full">
          {tabs.map((tab, index) => (
            <div 
              key={index} 
              className={activeTab === index + 1 ? 'block h-full' : 'hidden'}
              role="tabpanel"
              aria-labelledby={`tab-${index}`}
            >
              <div className="p-4 lg:p-6 h-full overflow-y-auto">
                <div className="prose prose-sm lg:prose-base max-w-none break-words">
                  {tab.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;