import React, { useState } from 'react';
import './App.css';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('person');
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        <button
          data-testid="person-tab"
          className={activeTab === 'person' ? 'active' : ''}
          onClick={() => handleTabClick('person')}
        >
          Person
        </button>
        <button
          data-testid="address-tab"
          className={activeTab === 'address' ? 'active' : ''}
          onClick={() => handleTabClick('address')}
        >
          Address
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'person' && (
          <div data-testid="person-container" className="tab-pane">
            <p>Name: Shaik Usman</p>
            <p>Age: 25</p>
            <p>Occupation: Developer</p>
          </div>
        )}
        {activeTab === 'address' && (
          <div data-testid="address-container" className="tab-pane">
            <p>Street: 1234 Main St</p>
            <p>City: San Francisco</p>
            <p>State: CA</p>
            <p>Zip: 94107</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;

